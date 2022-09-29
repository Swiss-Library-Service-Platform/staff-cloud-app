import { Component, OnInit } from '@angular/core';
import { Configuration } from '../models/configuration.model'
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  config: Configuration;
  domainInput: string;
   
  constructor(
    private configService: ConfigService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.config = await this.configService.getConfigs();
    console.log(this.config);
  }

  addDomain() {
    this.config.domains.push(this.domainInput);
    this.configService.saveConfig(this.config);
  }

}
