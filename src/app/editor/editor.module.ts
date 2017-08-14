import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {EditorComponent} from './directives/editor.component';
import {EditorService} from './services/editor-service';

@NgModule({
	imports: [ BrowserModule, FormsModule ],
	declarations: [
		EditorComponent
	],
	providers: [
		EditorService
	],
	exports: [EditorComponent]
})
export class EditorModule {
}
