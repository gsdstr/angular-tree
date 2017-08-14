import {TreeNode} from './tree-node';

export class TreeNodeFile extends TreeNode {

	public static get nodeType(){
		return 'file';
	}

	get nodeClass(): string {
		return 'file';
	}

	onOpen(){
		// TODO
	}

	constructor(parent: TreeNode, plain? :any){
		super(parent);
		if (!plain){
			this._name = 'New file';
			return;
		}
		this._name = plain.name;
	}

	toPlain(){
		return { name: this.name, type: TreeNodeFile.nodeType }
	}

}
