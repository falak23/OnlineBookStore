import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { AppComponent} from "../app.component";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserServiceService } from "src/app/service/user-service.service";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  present: boolean = null;
  passwordValidation: boolean = true;

  constructor(private http: HttpClient, private router: Router, private userService: UserServiceService) {
       
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    })  
  }

  ngOnInit() {}

  registerUser(): void {
    console.log(JSON.stringify(this.form.value));

    this.userService.saveUser(this.form.value)
    .subscribe((res: any) => {
      console.log(res);
       this.router.navigate(["login"]);
    })
  }

}


