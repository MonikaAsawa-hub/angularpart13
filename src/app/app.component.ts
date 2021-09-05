import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  flag: boolean = true

  constructor(
    public globalService: GlobalService
  ) { }

  apply(value: string) {
    this.flag = value == "login" ? true : false;
    if (value != "login") {
      this.globalService.submitted = false;
    }
  }
}
