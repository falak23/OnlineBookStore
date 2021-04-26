import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserServiceService } from "src/app/service/user-service.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  message: string = null;
  errorMessage: string;

  constructor(private http: HttpClient, private router: Router, private userService: UserServiceService) {
    this.form = new FormGroup({
      username: new FormControl("", [
        Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit() {
  }

  getLogin() {
    this.userService.findUser(this.form.value.username, this.form.value.password)
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigate(["home"]);
      })
  }
}
