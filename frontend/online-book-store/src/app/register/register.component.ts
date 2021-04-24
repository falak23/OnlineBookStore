import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { AppComponent, User } from "../app.component";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserServiceService } from "src/app/service/user-service.service";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {

  model: User = {
    username: "",
    password: "",
    // role: false,
  };

  form: FormGroup;

  present: boolean = null;
  // usernameAvailability: string;
  passwordValidation: boolean = true;

  constructor(private http: HttpClient, private router: Router, private userService: UserServiceService) {
       
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    })  
  }

  ngOnInit() {
  // usernamePresent(): void {
  //   // this.fontColor = "";
  //   let url = "http://localhost:8080/checkUserName",
  //   this.userService.post<boolean>(url, this.model.username).subscribe((res) => {
  //     this.present = res;
  //     console.log(this.present);
  //     if (this.present) {
  //       // this.fontColor = "red";
  //       this.usernameAvailability = "UserName Already Taken";
  //     } else {
  //       // this.fontColor = "green";
  //       this.usernameAvailability = "Available";
  //     }
  //     this.router.navigate(["register"]);
  //   });
  }

  // updateSelect() {
  //   this.model.role= this.options.length != 4;
  // }

  registerUser(): void {
    console.log(JSON.stringify(this.form.value));

    this.userService.saveUser(this.form.value)
    .subscribe((res: any) => {
      console.log(res);
       this.router.navigate(["login"]);
    })
  }

//    console.log(this.password);


  //   this.updateSelect();

  //   let url = "http://localhost:8080/register";
  //   this.http.post<User>(url, this.model).subscribe(
  //     (res) => {
  //       AppComponent.modelUser = res;
  //       this.router.navigate(["login"]);
  //     },
  //     (err) => {
  //       console.log([this.model]);
  //       alert("An error has occurred while Registering");
  //     }
  //   );
//   this.riderService.saveRider(this.form.value)
//       .subscribe((res: any) => {
//         console.log(res);
//         this.router.navigate(["login"]);
//       }) 
}


