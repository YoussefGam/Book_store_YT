import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './admin/books/books.component';
import { UsersComponent } from './admin/users/users.component';
import { CartComponent } from './cart/cart.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { LoginclientComponent } from './loginclient/loginclient.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { ShopadminComponent } from './shopadmin/shopadmin.component';
import { ShopbookComponent } from './shopbook/shopbook.component';

const routes: Routes = [
  {path:"", redirectTo:"client",pathMatch:"full"},
  {path: 'admin/users', component: UsersComponent},
  { path: 'admin/books', component: BooksComponent },
 { path: 'shop', component: ShopbookComponent },
 {path:"client", component: LoginclientComponent},
 {path:"admin", component: LoginadminComponent},
 { path: 'shopadmin', component: ShopadminComponent },
 {path: 'register', component: RegisterComponent},
 {path: 'admin/users', component: UsersComponent},
 {path: 'cart', component: CartComponent},
 {path: 'order', component: OrderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
