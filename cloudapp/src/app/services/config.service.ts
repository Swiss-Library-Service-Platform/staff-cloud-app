import { Injectable } from '@angular/core'
import { CloudAppConfigService, CloudAppRestService, Entity, HttpMethod, Request } from '@exlibris/exl-cloudapp-angular-lib'
import { Observable } from 'rxjs'
import { Configuration } from '../models/configuration.model'
import { UsersResponse } from '../models/users_response.model'

const httpHeader: { [header: string]: string } = { 'Content-Type': 'application/json', 'Accept': 'application/json' }

@Injectable({
	providedIn: 'root'
})
export class ConfigService {

	constructor(
        private configService: CloudAppConfigService
    ) { }

	async getConfigs(): Promise<Configuration> {
        let result = await this.configService.get().toPromise();
        let config = await Object.assign(new Configuration(), result);
        console.log(config);
        return config;
	}

    async saveConfig(config: Configuration) {
        await this.configService.set(config).toPromise();
        return;
    }
}