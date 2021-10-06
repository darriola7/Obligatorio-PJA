import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,

} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Package } from 'src/app/interfaces/package';
import { AllService } from '../../../services/all.service';

@Component({
  selector: 'app-venta-paquete',
  templateUrl: './venta-paquete.component.html',
  styleUrls: ['./venta-paquete.component.css'],
})
export class VentaPaqueteComponent implements OnInit {
  form: FormGroup;
  errMsg: any;
  loading = false;
  packages: Package[] = [];
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private allService: AllService
  ) {
    this.form = this.fb.group({
      clientName: ['', Validators.required],
      idpackage: [''],
      quantityAdults: ['', Validators.required],
      quantityKids: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadPackages();
  }

  loadPackages() {
    this.allService.getPackages().subscribe((response) => {
      this.packages = response.destinos;
    });
  }

  doPurchase() {
    const { clientName, idpackage, quantityAdults, quantityKids } =
      this.form.value;
    if (Number(idpackage)) {
      if (Number(quantityAdults) && Number(quantityKids)) {
        if (quantityAdults + quantityKids <= 10) {
          this.allService
            .postSell(clientName, +idpackage, quantityAdults, quantityKids)
            .subscribe((resp) => {
              this.message('Compra realizada con exito');
            });
        } else {
          this.message('Las cantidad sumada no puede superar las 10 personas.');
        }
      } else {
        this.message('Verifique los valores ingresados.');
      }
    } else {
      this.message('Seleccione un paquete.');
    }
  }

  message(err: any) {
    this._snackBar.open(err, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
    });
  }
  redirect() {
    this.router.navigate(['dashboard']);
  }
}
