import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  token =
    'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJodXNoaTEiLCJuYmYiOjE3MDU5NDUwMTAsImV4cCI6MTcwNjAzMTQxMCwiaWF0IjoxNzA1OTQ1MDEwfQ.WgnSPb9wJMIqessdHpApZNNtiRqoykmbM7IwDSuSX_OHJoYxJ6tegt7A_pS3r5-74WwAVRZSVZl05MhGBQMR-Q'; // Replace with actual token retrieval method
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get('https://localhost:5001/api/users', { headers: this.headers })
      .subscribe({
        next: (response) => {
          this.users = response;
        },
        error: (err) => console.log(err),
        complete: () => {},
      });
  }
}
