import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Client';
  users: any;
  images = [
    'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg',
    'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg',
    'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg',
  ];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (err) => console.log(err),
      complete: () => {},
    });
  }
}
