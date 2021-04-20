import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-book-store';
  static modelUser: User = {
    username: "",
    password: "",
    role: null,
  };
}
// ---------------------------------------------------------------------------------

export class User {
  username: string;
  password: string;
  role: boolean;
}