import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IinfoPrestadores, infoPrestadores} from '../models/infoPrestador'

@Injectable({
  providedIn: 'root'
})
export class sedesservice extends ServiceService<any> {

  constructor(private http: HttpClient) {
    super();
    this.apiUrl = environment.apiUrl;
    this.httpClient = http;
    this.resource = 'informacionprestadores';
  }
  public ConsultarContactoPrestador(
    nitPrestador: String,
    tipoIdentificacion: String,
   ): Observable<IinfoPrestadores> {
    const contacto: infoPrestadores = new infoPrestadores (
       '1',
	   nitPrestador,
	   tipoIdentificacion,
	   ' ',
       ' ',
    )
    const path = `consultarinfoprestador`;
    return this.post(contacto, path).pipe(map((resp: IinfoPrestadores) => resp));
  }
  

  public CrearContactoPrestador(
	nitPrestador: String,
    tipoIdentificacion: String,
    razonSocial: String,
    representanteLegal: String,
    emailReperesentantelegal: String): Observable<IinfoPrestadores> {
    const contacto: infoPrestadores = new infoPrestadores (
      nitPrestador,
      tipoIdentificacion,
      razonSocial,
      representanteLegal,
      emailReperesentantelegal
    )
    const path = `insertarinfoprestador`;
    return this.post(contacto, path).pipe(map((resp: IinfoPrestadores) => resp));
  }

  public ActualizarContactoPrestador(
    nitPrestador: String,
    tipoIdentificacion: String,
    razonSocial: String,
    representanteLegal: String,
    emailReperesentantelegal: String): Observable<IinfoPrestadores> {
    const contacto: infoPrestadores = new infoPrestadores(
      nitPrestador,
      tipoIdentificacion,
      razonSocial,
      representanteLegal,
      emailReperesentantelegal
    )
    const path = `actualizarinfoprestador`;
    return this.post(contacto, path).pipe(map((resp: IinfoPrestadores) => resp));
  }
}