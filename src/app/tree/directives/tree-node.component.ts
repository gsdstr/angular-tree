//our root app component
import {Component, Input} from '@angular/core'

import {TreeNode} from '../models/tree-node';
import {TreeNodeFolder} from '../models/tree-node-folder';
import {TreeService} from '../services/tree-service';
import {TreeNodeFile} from '../models/tree-node-file';

@Component({
	selector: 'tree-node',
	templateUrl: './tree-node.component.html'
})
export class TreeNodeComponent {

	@Input() node: TreeNode;

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
	}

	addFile() {
		const folder = this.node as TreeNodeFolder;
		folder.addFile();
	}

	open() {
		// TODO
		if (this.node instanceof TreeNodeFile ){
			this.treeService.edit(this.node.path);
			return;
		}
		this.node.onOpen();
	}

	remove() {
		this.node.remove();
	}

	setNameInput(v: boolean){
		if (!this.node.editable) return;
		this.isNameInput = v;
		if (v){
			setTimeout(() => {

			});
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
			this.node.removeChildren(node);
		}
	}

	onDrop(node) {
		if (this.treeService.draggedNode != node) {
			this.treeService.hasDropped = true;
			this.node.appendChildren(this.treeService.draggedNode);
			//this.treeManager.setHasDropped(true);
			//node.subNodes = [...node.subNodes, this.treeManager.getSelectedNode()];
		}
	}

}
