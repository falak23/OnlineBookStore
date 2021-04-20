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
  constructor(private http: HttpClient, private router: Router) {}

  model: User = {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
    role: false,
  };

  options: string = null;
  present: boolean = null;
  usernameAvailability: string;
  fontColor: string;

  phoneValidation: boolean = true;
  emailValidation: boolean = true;
  passwordValidation: boolean = true;

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
      }
      // ,
      // (err) => {
      //   console.log([this.model]);
      //   alert("An error has occurred while Registering");
      // }
    );
  }

  ngOnInit() {}
}