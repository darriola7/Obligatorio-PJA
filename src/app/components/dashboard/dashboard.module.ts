import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { VentaPaqueteComponent } from './venta-paquete/venta-paquete.component';
import { ListaPaqueteComponent } from './lista-paquete/lista-paquete.component';
import { TopDestinoComponent } from './top-destino/top-destino.component';
import { PromoDestinoComponent } from './promo-destino/promo-destino.component';
import { PersonasDestinoComponent } from './personas-destino/personas-destino.component';
import { CantidadVentasComponent } from './cantidad-ventas/cantidad-ventas.component';
import { GraficaPreciosDestinoComponent } from './grafica-precios-destino/grafica-precios-destino.component';
import { GraficaPersonasDestinoComponent } from './grafica-personas-destino/grafica-personas-destino.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    VentaPaqueteComponent,
    ListaPaqueteComponent,
    TopDestinoComponent,
    PromoDestinoComponent,
    PersonasDestinoComponent,
    CantidadVentasComponent,
    GraficaPreciosDestinoComponent,
    GraficaPersonasDestinoComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class DashboardModule { }
