import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductlistComponent } from './productlist/productlist.component'
import { GlobalService } from './services/global.service';
import { FilterPipe } from './shared/filter.pipe';
import { ApiService } from './services/api.service';
import { CartService } from './services/cart.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductitemComponent } from './productitem/productitem.component';
import { SearchService } from './services/search.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

let modules = [
  HttpClientModule
]

let services = [
  GlobalService
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductlistComponent,
    FilterPipe,
    ProductitemComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...modules,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    ...services,
    ApiService,
    CartService,
    SearchService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
