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

export interface ListElements {
  nombre_cliente: string;
  paquete: string;
  cantidad_mayores: number;
  cantidad_menores: number;
  precio_final: number;
}

@Component({
  selector: 'app-top-destino',
  templateUrl: './top-destino.component.html',
  styleUrls: ['./top-destino.component.css'],
})
export class TopDestinoComponent implements OnChanges {
  @Input() sells: Sell[] = [];
  @Input() packages: Package[] = [];
  displaySell: Array<any> = [];

  displayedColumns: string[] = ['destino', 'ventas'];

  constructor(private allService: AllService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.sells.length > 0 && this.packages.length > 0) {
      this.loadSells();
    }
  }

  loadSells() {
    // Genero array con todos los id de los destinos
    let ids: Array<number> = [];
    this.sells.forEach((sell) => {
      ids.push(sell.id_paquete);
    });

    // Genero array de cada destino posible
    const unique = ids.filter((v, i, a) => a.indexOf(v) === i);

    let topDestinationsIds: Array<any> = [];
    // Para cada destino posible
    unique.forEach((idUnique) => {
      let count = 0;
      // Recorro la lista de los destinos y cuento cuantas veces figura
      ids.forEach((v) => v === idUnique && count++);

      if (count >= 3) {
        topDestinationsIds.push({ id: idUnique, count });
      }
    });

    this.displaySell = this.generateList(topDestinationsIds);
  }
  // loadPackages(destinations: Array<any>) {
  //   this.allService.getPackages().subscribe((response) => {
  //     this.packages = response.destinos;
  //     this.displaySell = this.generateList(destinations);
  //   });
  // }

  generateList(destinations: Array<any>): Array<any> {
    const list: Array<any> = [];
    destinations.forEach((destination) => {
      const destino = this.packages.filter((p) => p.id === destination.id)[0];

      list.push({
        destino: destino.nombre,
        ventas: destination.count,
      });
    });

    return list;
  }
}
