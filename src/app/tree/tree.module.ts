import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {DragDropModule} from 'primeng/primeng';

import {TreeComponent} from './directives/tree.component';
import {TreeNodeComponent} from './directives/tree-node.component';
import {TreeService} from './services/tree-service';

@NgModule({
	imports: [ BrowserModule, DragDropModule, FormsModule ],
	declarations: [
		TreeComponent,
		TreeNodeComponent
	],
	providers: [
		TreeService
	],
	exports: [TreeComponent]
})
export class TreeModule {
}
