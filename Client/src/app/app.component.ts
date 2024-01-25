import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Client';
  users: any;

  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {}
  ngOnInit(): void {
    this.setCurrentUser();
    this.getUsers();
  }
  getUsers() {
    let token: any = '';
    this.accountService.currentUser$.subscribe({
      next: (user) => {
        token = user?.token;
      },
      error: (err) => console.log(err),
    });
    console.log(token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http
      .get('https://localhost:5001/api/users', { headers: headers })
      .subscribe({
        next: (response) => {
          this.users = response;
        },
        error: (err) => console.log(err),
        complete: () => {},
      });
  }
  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}
