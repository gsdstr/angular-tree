///<reference path="tree-node-folder.ts"/>

// TODO extract interface
export abstract class TreeNode {

	protected static PATH_DIVIDER = '/';

	protected _parent: TreeNode;
	protected _name: string;

	get name(): string {
		return this._name;
	}
	set name(v : string) {
		this._name = v;
	}

	get children(): TreeNode[] {
		return null;
	}

	get path(): string {
		return this._parent.path + TreeNode.PATH_DIVIDER + this.name;
	}

	/*

	 */

	get editable() {
		return true;
	}

	/*

	 */

	get nodeClass(): string {
		return '';
	}

	constructor(parent: TreeNode){
		this._parent = parent;
	}

	abstract onOpen();

	remove(){
		this._parent.removeChildren(this);
	}

	removeChildren(item: TreeNode) {
		const children = this.children;
		if (!children) return;
		const i = children.indexOf(item);
		if (i < 0) return;
		children.splice(i, 1);
	}

	appendChildren(item: TreeNode) {
		const children = this.children;
		if (!children) return;
		children.push(item);
	}

	abstract toPlain();

}
