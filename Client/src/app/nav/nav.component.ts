import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  model: {
    username: string;
    password: string;
  } = {
    username: '',
    password: '',
  };
  loggedIn = false;
  constructor(private accountService: AccountService) {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        this.loggedIn = true;
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
    this.loggedIn = false;
  }
}
