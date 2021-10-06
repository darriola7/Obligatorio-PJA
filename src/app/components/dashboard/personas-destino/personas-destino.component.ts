import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';
import { Package } from 'src/app/interfaces/package';
import { Sell } from 'src/app/interfaces/sell';
import { AllService } from '../../../services/all.service';

export interface PersonasDestino {
  id_paquete: number;
  nombre_paquete: string;
  cantidad: number;
}

@Component({
  selector: 'app-personas-destino',
  templateUrl: './personas-destino.component.html',
  styleUrls: ['./personas-destino.component.css'],
})
export class PersonasDestinoComponent implements OnChanges {
  @Input() sells: Sell[] = [];
  @Input() packages: Package[] = [];
  displaySell: Array<any> = [];

  list: Array<PersonasDestino> = [];

  displayedColumns: string[] = ['paquete', 'personas'];

  constructor(private allService: AllService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.sells.length > 0 && this.packages.length > 0) {
      this.loadSells();
    }
  }

  loadSells() {
    const array: Array<any> = [];
    this.sells.forEach((venta) => {
      const itemIndex = array.findIndex(
        (item) => item.id_paquete === venta.id_paquete
      );
      if (itemIndex !== -1) {
        array[itemIndex].cantidad +=
          venta.cantidad_mayores + venta.cantidad_menores;
      } else {
        const paquete = this.packages.find((p) => p.id === venta.id_paquete);
        const nombre = paquete ? paquete.nombre : '';
        const new_item = {
          id_paquete: venta.id_paquete,
          cantidad: venta.cantidad_mayores + venta.cantidad_menores,
          nombre_paquete: nombre,
        };
        array.push(new_item);
      }
    });
    this.displaySell = array;
  }
}
