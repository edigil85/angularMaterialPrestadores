import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Isedes, sedes} from '../models/sedes'

@Injectable({
  providedIn: 'root'
})
export class sedesservice extends ServiceService<any> {

  constructor(private http: HttpClient) {
    super();
    this.apiUrl = environment.apiUrl;
    this.httpClient = http;
    this.resource = 'sedesprestadores';
  }

  form: FormGroup = new FormGroup({
    $idregistro: new FormControl(null),
    departamento: new FormControl(''),
    municipio: new FormControl(''),
    direccion: new FormControl('', Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      $idregistro: null,
      departamento: '',
      municipio: '',
      direccion: '',
    });
  }


  public ConsultarSedes(
    nitPrestador: String,
    tipoIdentificacion: String,
   ): Observable<Isedes> {
    const sede: sedes = new sedes(
      1,
      nitPrestador,
      tipoIdentificacion,
      ' ',
      ' ',
      ' ',
      ' '
      )
    const path = `consultarsedeprestador`;
    return this.post(sede, path).pipe(map((resp: Isedes) => resp));
  }
  

  public CrearSede(
    nitPrestador: String,
    tipoIdentificacion: String,
    departamento: String,
    ciudad: String,
    direccion: String,
    sedeprincipal: String ): Observable<Isedes> {
    const sede: sedes = new sedes(
      1,
      nitPrestador,
      tipoIdentificacion,
      departamento,
      ciudad,
      direccion,
      sedeprincipal
      )
    const path = `insertarsedeprestador`;
    return this.post(sede, path).pipe(map((resp: Isedes) => resp));
  }

  public ActualizarSede(
    idRegistro: Number,
    nitPrestador: String,
    tipoIdentificacion: String,
    departamento: String,
    ciudad: String,
    direccion: String,
    sedeprincipal: String ): Observable<Isedes> {
    const sede: sedes = new sedes(
      idRegistro,
      nitPrestador,
      tipoIdentificacion,
      departamento,
      ciudad,
      direccion,
      sedeprincipal
      )
    const path = `actualizarsedeprestador`;
    return this.post(sede, path).pipe(map((resp: Isedes) => resp));
  }

  public EliminarSede(
    idRegistro: Number,
    nitPrestador: String,
    tipoIdentificacion: String,
    departamento: String,
    ciudad: String,
    direccion: String,
    sedeprincipal: String ): Observable<Isedes> {
    const sede: sedes = new sedes(
      idRegistro,
      nitPrestador,
      tipoIdentificacion,
      departamento,
      ciudad,
      direccion,
      sedeprincipal
      )
    const path = `eliminarsedeprestador`;
    return this.post(sede, path).pipe(map((resp: Isedes) => resp));
  }
}

