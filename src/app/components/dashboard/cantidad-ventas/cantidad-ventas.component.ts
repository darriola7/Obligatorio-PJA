import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';

import { Sell } from 'src/app/interfaces/sell';
@Component({
  selector: 'app-cantidad-ventas',
  templateUrl: './cantidad-ventas.component.html',
  styleUrls: ['./cantidad-ventas.component.css'],
})
export class CantidadVentasComponent implements OnChanges {
  @Input() sells: Sell[] = [];
  count: number = 0;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.sells.length > 0) {
      this.loadSells();
    }
  }

  loadSells() {
    this.count = this.sells.length;
  }
}
