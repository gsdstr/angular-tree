import {Component, OnDestroy, OnInit} from '@angular/core'
import {EditorService} from '../services/editor-service';

@Component({
	selector: 'editor',
	templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit, OnDestroy {

	// TODO save state
	protected path: any;
	protected content: any;
	protected subscription: any;

	constructor(protected editorService: EditorService){

	}

	save(){
		this.editorService.save(this.path, this.content);
	}

	ngOnInit(): void {
		this.editorService.openSubject.subscribe((path) => {
			this.path = path;
			this.content = this.editorService.load(path);
		});
	}

	ngOnDestroy(): void {
		this.subscription && this.subscription.dispose();
	}

}
