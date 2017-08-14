import {Component} from '@angular/core'
import {TreeNode} from '../models/tree-node';
import {TreeService} from '../services/tree-service';

@Component({
	selector: 'tree',
	templateUrl: './tree.component.html'
})
export class TreeComponent {

	protected  _rootNode: TreeNode;

	constructor(protected treeService: TreeService) {
		this._rootNode = treeService.rootNode;
	}

	save(){
		this.treeService.saveTree();
	}
}
