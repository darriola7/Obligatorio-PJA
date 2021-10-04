import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SellService {
  user: any;

  constructor(private http: HttpClient) {}

  setUser(user: any) {
    this.user = user;
  }

  getUserId() {
    return this.user?.id;
  }

  getApiKey() {
    return this.user?.apiKey;
  }

  doSell(
    idVendedor: number,
    nombreCliente: string,
    idPaquete: number,
    cantidadMayores: number,
    cantidadMenores: number
  ) {
    const headers = {
      'Content-type': 'application/json',
      apikey: this.getApiKey(),
    };
    const body = JSON.stringify({
      idVendedor,
      nombreCliente,
      idPaquete,
      cantidadMayores,
      cantidadMenores,
    });
    return this.http.post('https://destinos.develotion.com/ventas.php', body, {
      headers,
    });
  }
}
