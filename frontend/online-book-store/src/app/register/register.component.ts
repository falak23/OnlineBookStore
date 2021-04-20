import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { AppComponent, User } from "../app.component";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {

  model: User = {
    username: "",
    password: "",
    role: false,
  };

  options: string = null;
  present: boolean = null;
  usernameAvailability: string;
  fontColor: string;
  passwordValidation: boolean = true;

  constructor(private http: HttpClient, private router: Router) {}

  usernamePresent(): void {
    this.fontColor = "";
    let url = "http://localhost:8080/checkUserName";

    this.http.post<boolean>(url, this.model.username).subscribe((res) => {
      this.present = res;
      console.log(this.present);
      if (this.present) {
        this.fontColor = "red";
        this.usernameAvailability = "UserName Already Taken";
      } else {
        this.fontColor = "green";
        this.usernameAvailability = "Available";
      }
      this.router.navigate(["register"]);
    });
  }

  updateSelect() {
    this.model.role= this.options.length != 4;
  }

  registerUser(): void {
    this.updateSelect();

    let url = "http://localhost:8080/register";
    this.http.post<User>(url, this.model).subscribe(
      (res) => {
        AppComponent.modelUser = res;
        this.router.navigate(["login"]);
      },
      (err) => {
        console.log([this.model]);
        alert("An error has occurred while Registering");
      }
    );
  }

  ngOnInit() {}
}
