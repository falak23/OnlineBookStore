import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminrootComponent } from './admin/adminroot/adminroot.component';
import { BooksComponent } from './admin/books/books.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
// import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopbookComponent } from './shopbook/shopbook.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: 'shop', component: ShopbookComponent },
  { path: 'admin/books', component: BooksComponent },
  { path: 'afterlogin', loadChildren: () => import('src/app/afterlogin/afterlogin.component').then(m => m.AfterloginComponent) },
  { path: 'adminroot', loadChildren: () => import('src/app/admin/adminroot/adminroot.component').then(m => m.AdminrootComponent) },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
