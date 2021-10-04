import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './components/register/register.component.html',
  styleUrls: ['./components/login/login.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
