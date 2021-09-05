import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  successMessage:string ="";
  loginForm!: FormGroup; 
  constructor(private fb: FormBuilder,
    public router: Router,
    public globalService: GlobalService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
  }

  login(){
    this.successMessage="Successfully Logged In...🙂";
    alert("Success!!!");
    this.globalService.submitted = true;
    this.router.navigate(['productlist']);
  }

  ngOnDestroy(){
    this.globalService.submitted = false;
  }

}
