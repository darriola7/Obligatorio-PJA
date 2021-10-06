import {
  Component,
  OnChanges,
  SimpleChanges,
  Input,
  ViewChild,
} from '@angular/core';
import { Package } from 'src/app/interfaces/package';
import { Sell } from 'src/app/interfaces/sell';
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-grafica-personas-destino',
  templateUrl: './grafica-personas-destino.component.html',
  styleUrls: ['./grafica-personas-destino.component.css'],
})

export class GraficaPersonasDestinoComponent implements OnChanges {
  @Input() sells: Sell[] = [];
  @Input() packages: Package[] = [];
  ids: Array<any> = [];
  destinos: Array<any> = [];
  pasajeros: Array<any> = [];

  @ViewChild('chart-personas-destino', { static: false })
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [],
      chart: {
        width: 800,
        type: "pie"
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.sells.length > 0 && this.packages.length > 0) {
      this.loadSells();
    }
  }

  loadSells() {
    this.sells.forEach((venta) => {
      const itemIndex = this.ids.findIndex((item) => item === venta.id_paquete);
      if (itemIndex !== -1) {
        this.pasajeros[itemIndex] +=
          venta.cantidad_mayores + venta.cantidad_menores;
      } else {
        const paquete = this.packages.find((p) => p.id === venta.id_paquete);
        const nombre = paquete ? paquete.nombre : '';
        this.ids.push(venta.id_paquete);
        this.destinos.push(nombre);
        this.pasajeros.push(venta.cantidad_mayores + venta.cantidad_menores);
      }
    });
    
    this.chartOptions.series = this.pasajeros,
    this.chartOptions.labels = this.destinos;
  }
}

