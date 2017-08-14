// TODO extract to interface

import {TreeNode} from './tree-node';
import {TreeNodeFile} from './tree-node-file';
import {TreeNodeFactory} from './tree-node-factory';

export class TreeNodeFolder extends TreeNode {

	public static get nodeType(){
		return 'folder';
	}

	protected _children = [];

	get children(): TreeNode[] {
		if (this._expanded)
			return this._children;
		return [];
	}

	get nodeClass(): string {
		if (this._expanded)
			return 'folder-open';
		return 'folder';
	}

	onOpen(){
		this._expanded = !this._expanded;
	}

	// TODO separate to state
	protected _expanded: boolean;

	get expanded():boolean {
		return this._expanded;
	}
	set expanded(v : boolean) {
		this._expanded = v;
	}

	/*

	 */

	addFolder() {
		this._children.push(new TreeNodeFolder(this))
	}

	addFile() {
		this._children.push(new TreeNodeFile(this))
	}

	constructor(parent: TreeNode, plain? :any){
		super(parent);
		if (!plain){
			this._name = 'New folder';
			return;
		}
		this._name = plain.name;
		this._children = plain.children.map(i => TreeNodeFactory.fromPlain(this, i)).filter(i => i);
		this._expanded = plain.expanded;
	}

	toPlain(){
		return { name: this.name, type: TreeNodeFolder.nodeType, children: this._children.map(i => i.toPlain()), expanded: this._expanded }
	}

}
