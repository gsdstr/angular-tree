import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {TreeModule} from './tree/tree.module';
import {EditorModule} from './editor/editor.module';
import {FormsModule} from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule, FormsModule, TreeModule, EditorModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
