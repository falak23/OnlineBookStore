import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../app.component";
import { UserServiceService } from "src/app/service/user-service.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  // model: Login = {
  //   username: "",
  //   password: "",
  // };
  form: FormGroup;

  message: string = null;
  errorMessage: string;

  constructor(private http: HttpClient, private router: Router, private userService : UserServiceService) {
    this.form = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        // Validators.pattern("^[A-Za-z0-9._-]+@[a-z0-9.]+\.[a-z]{2,6}$")
      ]),
      // password: new FormControl("", [
      //   Validators.required,
      //   Validators.pattern("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")
      // ])
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit() {
  //  this.router.navigate(["menu"]);
  }
//  loginUser(){
//   this.router.navigate(["home"]);
//  }

 getLogin() {
  this.userService.findUser(this.form.value.username,this.form.value.password)
    .subscribe((res: any) => {
     
      
      console.log(res);
      // this.router.navigate(["home"]);
      if(res==1){
        this.errorMessage= "You do not have an account";
      }else if(res==2){
        //this.router.navigate(['/afterlogin2/riderhome3/'+ this.myForm.value.email]);
        this.router.navigate(['/home']) 
       console.log("Welcome " + this.form.value.username + " !");
      }else if(res==3){
        this.errorMessage= "Wrong Password";
      }
            // else if(res==4){
      //   this.router.navigate(['/admin/adminroot']);
      // }

    })
}
}
//   sendFeedback(): void {
//     let url = "http://localhost:8080/login";
//     let key = "userData";
//     this.http.post<User>(url, this.model).subscribe(
//       (res) => {
//         sessionStorage.setItem(key, JSON.stringify(res));
//         if (res != null && !res.role) {
//           this.router.navigate(["menu"]);
//         }
//         if (res != null && res.role) {
//           this.router.navigate(["menu"]);
//         }
//         if (res == null) {
//           this.message = "Username Or Password is Wrong";
//           sessionStorage.clear();
//         }
//       },
//       (err) => {
//         console.log([this.model]);
//         alert("An error has occurred while logging in");
//       }
//     );
//   }
// }

// export interface Login {
//   username: string;
//   password: string;
// }