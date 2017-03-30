import { Injectable } from '@angular/core';
import { Restangular } from 'ng2-restangular';

	@Injectable()
export class SaveService {

	constructor(private restangular:Restangular) { }

	save(name:string, comments:string, data:any){
		let saveEndpoint = "cfg-task-service/service/datasets";

		let restObj = this.restangular.all(saveEndpoint);
	
		let request:any = {};
		request.name = name;
		request.comments = comments;
		request.data = data;

		// [elem, path, params, headers]
		return restObj.customPOST(request,undefined, undefined, {'Content-Type': 'application/json'});
	}
}