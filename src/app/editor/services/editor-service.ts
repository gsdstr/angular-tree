import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class EditorService {

	openSubject = new BehaviorSubject<string>(null);

	open(path: string) {
		this.openSubject.next(path);
	}


	// TODO handle rename or use uniq id for files
	save(path: any, content: any) {
		localStorage.setItem(path, content);
	}

	load(path: any): string {
		return localStorage.getItem(path);
	}

}
