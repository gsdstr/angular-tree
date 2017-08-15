//our root app component
import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core'

import {TreeNode} from '../models/tree-node';
import {TreeNodeFolder} from '../models/tree-node-folder';
import {TreeService} from '../services/tree-service';
import {TreeNodeFile} from '../models/tree-node-file';
import {Subject} from 'rxjs/Subject';
import {TreeNodeFactory} from '../models/tree-node-factory';

@Component({
	selector: 'tree-node',
	templateUrl: './tree-node.component.html'
})
export class TreeNodeComponent implements OnInit, OnDestroy {

	@Input() node: TreeNode;
	@ViewChild('inputName') inputName;

	isNameInput: boolean;

	get classIco(): string {
		return 'fa-' + this.node.nodeClass;
	}

	constructor(protected treeService: TreeService) {
	}


	// TODO add action array fom node model
	addFolder() {
		const folder = this.node as TreeNodeFolder;
		folder.addFolder();
		this.updateSubject.next();
	}

	addFile() {
		const folder = this.node as TreeNodeFolder;
		folder.addFile();
		this.updateSubject.next();
	}

	open() {
		// TODO
		if (this.node instanceof TreeNodeFile ){
			this.treeService.edit(this.node.path);
			return;
		}
		this.node.onOpen();
		this.updateSubject.next();
	}

	remove() {
		this.node.remove();
		this.updateSubject.next();
	}

	setNameInput(v: boolean){
		if (!this.node.editable) return;
		this.isNameInput = v;
		if (v){
			setTimeout(() => {
				this.inputName.nativeElement.focus();
			});
		} else { // end edit
			// TODO check change
			this.updateSubject.next();
		}
	}

	/*

	 */

	onDragStart(node) {
		this.treeService.draggedNode = node;
	}

	onDragEnd(node) {
		if (this.treeService.hasDropped) {
			this.treeService.hasDropped = false;
			this.treeService.draggedNode = null;
			this.node.remove();
		}
	}

	onDrop(node) {
		if (this.treeService.draggedNode != node) {
			this.treeService.hasDropped = true;
			this.node.appendChildren(TreeNodeFactory.clone(this.node, this.treeService.draggedNode));
			this.updateSubject.next();
			//this.treeManager.setHasDropped(true);
			//node.subNodes = [...node.subNodes, this.treeManager.getSelectedNode()];
		}
	}

	/*

	 */

	ngOnInit(): void {
		this.updateSubject.subscribe(() => {
			this.treeService.saveTree();
		});
	}

	ngOnDestroy(): void {
		this.subscription && this.subscription.dispose();
	}

	/*

	 */

	// TODO move to tree component
	updateSubject = new Subject<void>();
	protected subscription: any;
}
