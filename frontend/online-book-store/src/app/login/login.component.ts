import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../app.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  model: Login = {
    username: "",
    password: "",
  };

  message: string = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    if (sessionStorage.length > 0) this.router.navigate(["menu"]);
  }

  sendFeedback(): void {
    let url = "http://localhost:8080/login";
    let key = "userData";
    this.http.post<User>(url, this.model).subscribe(
      (res) => {
        sessionStorage.setItem(key, JSON.stringify(res));
        if (res != null && !res.role) {
          this.router.navigate(["menu"]);
        }
        if (res != null && res.role) {
          this.router.navigate(["menu"]);
        }
        if (res == null) {
          this.message = "Username Or Password is Wrong";
          sessionStorage.clear();
        }
      },
      (err) => {
        console.log([this.model]);
        alert("An error has occurred while logging in");
      }
    );
  }
}

export interface Login {
  username: string;
  password: string;
}