import { Component, OnInit } from '@angular/core';
import { AlertService, CloudAppRestService, HttpMethod } from '@exlibris/exl-cloudapp-angular-lib';
import { UserSummary } from '../models/user_summary.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
		private userService: UserService,
    private alert: AlertService,
  ) { }

  users: UserSummary[];
	searchTerm: string;
  loading: boolean = false;

  ngOnInit(): void {

  }

  async findUser() {
    this.loading = true;
    this.userService.findUser(this.searchTerm.trim()).subscribe(
      (userResponse) => {
        this.users = userResponse.user;
      },
      (error) => {
        this.alert.error("Something went wrong", { autoClose: true })
      },
      () => {
        this.loading = false;
      });
  }
}
