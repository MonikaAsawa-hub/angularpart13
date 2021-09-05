import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public email: string = "monikaasawa13@gmail.com";
  public headerText: string = "Monika Asawa - AngularProject";

  constructor() { }

  ngOnInit() {
    // alert(this.auth.loggedIn);
  }

}
