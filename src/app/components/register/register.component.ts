import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AllService } from '../../services/all.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  errMsg: any;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private allService: AllService
  ) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  doSignup() {
    const { user, password } = this.form.value;

    this.allService.register(user, password).subscribe(
      (user) => {
        this.allService.setUser(user);
        this.redirect();
      },
      ({ error: { mensaje } }) => {
        this.error(mensaje);
        //  this.errMsg = mensaje;
      }
    );
  }

  error(err: any) {
    this._snackBar.open(err, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
    });
  }

  redirect() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 1000);
  }
}
