import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './register/register.component.html',
  styleUrls: ['./login/login.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
