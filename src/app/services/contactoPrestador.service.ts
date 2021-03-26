import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IcontactoPrestador, contactoPrestador} from '../models/contactoPrestador'

@Injectable({
  providedIn: 'root'
})
export class sedesservice extends ServiceService<any> {

  constructor(private http: HttpClient) {
    super();
    this.apiUrl = environment.apiUrl;
    this.httpClient = http;
    this.resource = 'contactoprestador';
  }
  public ConsultarContactoPrestador(
    nitPrestador: String,
    tipoIdentificacion: String,
   ): Observable<IcontactoPrestador> {
    const contacto: contactoPrestador = new contactoPrestador (
       '1',
	   nitPrestador,
	   tipoIdentificacion,
	   'S',
       'S',
       'S',
	   ' ',
       ' ',
       ' '
      )
    const path = `consultarcontactoprestador`;
    return this.post(contacto, path).pipe(map((resp: IcontactoPrestador) => resp));
  }
  

  public CrearContactoPrestador(
	nitPrestador: String,
	tipoIdentificacion: String,
	notificacionGlosa: String,
	notificacionDevoluciones: String,
	notificacionCartera: String,
	emailNotificacion: String,
	nombre: String,
	telefono: String): Observable<IcontactoPrestador> {
    const contacto: contactoPrestador = new contactoPrestador (
      '1',
      nitPrestador,
      tipoIdentificacion,
      notificacionGlosa,
      notificacionDevoluciones,
      notificacionCartera,
      emailNotificacion,
      nombre,
      telefono
      )
    const path = `insertarcontactoprestador`;
    return this.post(contacto, path).pipe(map((resp: IcontactoPrestador) => resp));
  }

  public ActualizarContactoPrestador(
    idRegistro: String,
	nitPrestador: String,
	tipoIdentificacion: String,
	notificacionGlosa: String,
	notificacionDevoluciones: String,
	notificacionCartera: String,
	emailNotificacion: String,
	nombre: String,
	telefono: String): Observable<IcontactoPrestador> {
    const contacto: contactoPrestador = new contactoPrestador(
        idRegistro,
        nitPrestador,
        tipoIdentificacion,
        notificacionGlosa,
        notificacionDevoluciones,
        notificacionCartera,
        emailNotificacion,
        nombre,
        telefono
      )
    const path = `actualizarcontactoprestador`;
    return this.post(contacto, path).pipe(map((resp: IcontactoPrestador) => resp));
  }

  public EliminarContactoPrestador(
    idRegistro: String,
	nitPrestador: String,
	tipoIdentificacion: String,
	notificacionGlosa: String,
	notificacionDevoluciones: String,
	notificacionCartera: String,
	emailNotificacion: String,
	nombre: String,
	telefono: String ): Observable<IcontactoPrestador> {
    const contacto: contactoPrestador = new contactoPrestador(
      idRegistro,
      nitPrestador,
      tipoIdentificacion,
      notificacionGlosa,
      notificacionDevoluciones,
      notificacionCartera,
      emailNotificacion,
      nombre,
      telefono
      )
    const path = `eliminarcontactoprestador`;
    return this.post(contacto, path).pipe(map((resp: IcontactoPrestador) => resp));
  }
}