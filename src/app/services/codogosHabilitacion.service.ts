import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IcodigoHabilitacion, codigoHabilitacion} from '../models/codigoHabilitacion'

@Injectable({
  providedIn: 'root'
})
export class sedesservice extends ServiceService<any> {

  constructor(private http: HttpClient) {
    super();
    this.apiUrl = environment.apiUrl;
    this.httpClient = http;
    this.resource = 'codigoshabilitacion';
  }
  public ConsultarCodigoHabilitacion(
    nitPrestador: String,
    tipoIdentificacion: String,
   ): Observable<IcodigoHabilitacion> {
    const codigosHabilitacion: codigoHabilitacion = new codigoHabilitacion (
        nitPrestador,
        tipoIdentificacion,
        'a',
        'a'
      )
    const path = `consultarcodigoshabiliatacion`;
    return this.post(codigosHabilitacion, path).pipe(map((resp: IcodigoHabilitacion) => resp));
  }
  

  public CrearCodigoHabilitacion(
    nitPrestador: String,
    tipoIdentificacion: String,
	codigo: String,
    descripcionServicio: String): Observable<IcodigoHabilitacion> {
    const codigosHabilitacion: codigoHabilitacion = new codigoHabilitacion (
      nitPrestador,
      tipoIdentificacion,
      codigo,
      descripcionServicio
      )
    const path = `insertarcodigohabilitacion`;
    return this.post(codigosHabilitacion, path).pipe(map((resp: IcodigoHabilitacion) => resp));
  }

  public ActualizarCodigoHabilitacion(
    nitPrestador: String,
    tipoIdentificacion: String,
	codigo: String,
    descripcionServicio: String): Observable<IcodigoHabilitacion> {
    const codigosHabilitacion: codigoHabilitacion = new codigoHabilitacion(
        nitPrestador,
        tipoIdentificacion,
        codigo,
        descripcionServicio
      )
    const path = `actualizarcodigohabilitacion`;
    return this.post(codigosHabilitacion, path).pipe(map((resp: IcodigoHabilitacion) => resp));
  }

  public EliminarCodigoHabilitacion(
    nitPrestador: String,
    tipoIdentificacion: String,
	codigo: String,
    descripcionServicio: String ): Observable<IcodigoHabilitacion> {
    const codigosHabilitacion: codigoHabilitacion = new codigoHabilitacion(
        nitPrestador,
        tipoIdentificacion,
        codigo,
        descripcionServicio
      )
    const path = `eliminarcodigohabilitacion`;
    return this.post(codigosHabilitacion, path).pipe(map((resp: IcodigoHabilitacion) => resp));
  }
}