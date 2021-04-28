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

  // message: string = null;
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

  getLogin() : void{
    console.log(JSON.stringify(this.form.value));

    this.userService.findUser(this.form.value.username)
      .subscribe((res: any) => {
           console.log(res);
           if (res === 1) {
            this.errorMessage = "You do not have an account";
          } else if (res === 2) {
            this.errorMessage = "User Login Successful!";
            this.router.navigate(["afterlogin"]);
          } else if (res === 3) {
            this.errorMessage = "Wrong Password";
          } else if (res === 4) {
            this.errorMessage = "Admin Login Successful!";
            this.router.navigate(['/admin/adminroot']);
          }
        this.router.navigate(["home"]);
      })
  }
}
