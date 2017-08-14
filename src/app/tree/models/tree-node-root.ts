import {TreeNodeFolder} from './tree-node-folder';
import {TreeNode} from './tree-node';

export class TreeNodeRoot extends TreeNodeFolder {

	get name(): string {
		return 'Root';
	}
	set name(v: string) {
		throw new Error('read only');
	}

	get editable(): boolean {
		return false;
	}

	get path(): string {
		return '';
	}

	constructor(plain? :any){
		super(null, plain);
	}

}
