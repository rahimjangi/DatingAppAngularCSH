import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: any;
  constructor(
    private accountService: AccountService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.getUsers();
  }
  registerMode = false;
  registerToggle() {
    this.registerMode = !this.registerMode;
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
  cancelRegisterMode(event: boolean) {
    console.log('cancel register mode:', event);
    this.registerMode = event;
  }
}
