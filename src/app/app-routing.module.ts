import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'productlist', component: ProductlistComponent },
  // {path:'productitem', loadChildren: './productitem/productitem.component#ProductitemComponent'},
  { path: '**', component: ProductlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, ProductlistComponent]
