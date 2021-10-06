import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Package } from 'src/app/interfaces/package';
import { Sell } from 'src/app/interfaces/sell';
import { AllService } from '../../../services/all.service';

export interface ListElements {
  nombre_cliente: string;
  paquete: string;
  cantidad_mayores: number;
  cantidad_menores: number;
  precio_final: number;
}

@Component({
  selector: 'app-lista-paquete',
  templateUrl: './lista-paquete.component.html',
  styleUrls: ['./lista-paquete.component.css'],
})
export class ListaPaqueteComponent implements OnChanges {
  @Input() sells: Sell[] = [];
  @Input() packages: Package[] = [];
  displaySell: Array<ListElements> = [];

  displayedColumns: string[] = [
    'cliente',
    'paquete',
    'cantidadAdultos',
    'cantidadNinos',
    'precioFinal',
  ];

  constructor(private allService: AllService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.sells.length > 0 && this.packages.length > 0) {
      this.displaySell = this.generateList();
    }
  }

  generateList(): Array<ListElements> {
    const list: Array<ListElements> = [];
    this.sells.forEach((sell) => {
      const destino = this.packages.filter((p) => p.id === sell.id_paquete)[0];
      const precioFinal =
        sell.cantidad_mayores * destino.precio_mayor +
        sell.cantidad_menores * destino.precio_menor;
      const item: ListElements = {
        nombre_cliente: sell.nombre_cliente,
        paquete: destino.nombre,
        cantidad_mayores: sell.cantidad_mayores,
        cantidad_menores: sell.cantidad_menores,
        precio_final: precioFinal,
      };
      list.push(item);
    });

    return list;
  }
}
