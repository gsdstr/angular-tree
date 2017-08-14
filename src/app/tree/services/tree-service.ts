import {Injectable} from '@angular/core';
import {TreeNode} from '../models/tree-node';
import {TreeNodeRoot} from '../models/tree-node-root';
import {EditorService} from '../../editor/services/editor-service';

@Injectable()
export class TreeService {

	protected _rootNode: TreeNode;
	protected _draggedNode: TreeNode;
	protected _hasDropped: boolean;

	constructor(protected editorService: EditorService){
		this.loadTree();
	}

	get rootNode(){
		return this._rootNode;
	}

	get draggedNode(){
		return this._draggedNode;
	}
	set draggedNode(node: TreeNode){
		this._draggedNode = node;
	}

	get hasDropped(): boolean{
		return this._hasDropped;
	}
	set hasDropped(v: boolean){
		this._hasDropped = v;
	}

	/*

	 */

	protected static LS_TREE = 'tree';

	saveTree(){
		const tree = JSON.stringify(this._rootNode.toPlain());
		localStorage.setItem(TreeService.LS_TREE, tree);
	}

	loadTree(){
		const tree = localStorage.getItem(TreeService.LS_TREE);
		this._rootNode = new TreeNodeRoot(JSON.parse(tree));
	}


	/*

	 */

	edit(path: string){
		this.editorService.open(path);
	}

}
