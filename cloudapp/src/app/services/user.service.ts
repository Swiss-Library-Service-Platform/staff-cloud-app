import { Injectable } from '@angular/core'
import { CloudAppRestService, Entity, HttpMethod, Request } from '@exlibris/exl-cloudapp-angular-lib'
import { Observable } from 'rxjs'
import { UsersResponse } from '../models/users_response.model'

const httpHeader: { [header: string]: string } = { 'Content-Type': 'application/json', 'Accept': 'application/json' }

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private restService: CloudAppRestService) { }

	findUser(searchTerm: string): Observable<UsersResponse> {
		let request: Request = {
			url: '/users',
			method: HttpMethod.GET,
			headers: httpHeader,
			queryParams: {
				q: this.createPattern(searchTerm),
				order_by: 'last_name,first_name,primary_id',
				// limit: AppConfig.pageSize,
			}
		}
		return this.restService.call(request)
	}

	private createPattern(searchTerm: string): string {
		let cleanSearchTerm = searchTerm.trim().replace(' ', '_')
		return `ALL~*${cleanSearchTerm}*`
	}
}