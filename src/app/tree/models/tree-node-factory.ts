import {TreeNodeFolder} from './tree-node-folder';
import {TreeNodeFile} from './tree-node-file';
import {TreeNode} from './tree-node';

export abstract class TreeNodeFactory {

	static fromPlain(parent, obj): TreeNode{
		if (!obj) return null;
		switch (obj.type){
			case 'folder':
				return new TreeNodeFolder(parent, obj);
			case 'file':
				return new TreeNodeFile(parent, obj);
			default:
				return null;
		}
	}

	static clone(parent, node: TreeNode) {
		return TreeNodeFactory.fromPlain(parent, node.toPlain())
	}
}
