import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: {
    username: string;
    password: string;
  } = {
    username: '',
    password: '',
  };
  constructor(public accountService: AccountService) {}
  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log('This is response: ' + response);
        this.model.username = response.username;
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
    console.log(this.model);
  }

  logout() {
    this.accountService.logout();
  }
}
