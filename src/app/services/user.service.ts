import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PackagesResponse } from '../interfaces/packagesResponse';
import { SellsResponse } from '../interfaces/sellsResponse';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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

  logOut() {
    this.user = undefined;
  }

  login(usuario: string, password: string) {
    const headers = { 'Content-type': 'application/json' };
    const body = JSON.stringify({ usuario, password });
    return this.http.post('https://destinos.develotion.com/login.php', body, {
      headers,
    });
  }

  register(usuario: string, password: string) {
    const headers = { 'Content-type': 'application/json' };
    const body = JSON.stringify({ usuario, password });
    return this.http.post(
      'https://destinos.develotion.com/usuarios.php',
      body,
      {
        headers,
      }
    );
  }

  getPackages(): Observable<PackagesResponse> {
    const headers = {
      'Content-type': 'application/json',
      apikey: this.getApiKey(),
    };
    return this.http.get<PackagesResponse>(
      'https://destinos.develotion.com/paquetes.php',
      {
        headers,
      }
    );
  }

  doSell(
    nombreCliente: string,
    idPaquete: number,
    cantidadMayores: number,
    cantidadMenores: number
  ) {
    const headers = {
      'Content-type': 'application/json',
      apikey: this.getApiKey(),
    };
    const idVendedor = this.getUserId();
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

  getSells(): Observable<SellsResponse> {
    const headers = {
      'Content-type': 'application/json',
      apikey: this.getApiKey(),
    };
    return this.http.get<SellsResponse>(
      'https://destinos.develotion.com/ventas.php',
      {
        headers,
        params: {
          idVendedor: this.getUserId(),
        },
      }
    );
  }
}
