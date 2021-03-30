import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { Componenet1Component } from './componenet1/componenet1.component';
import { Componenet2Component } from './componenet2/componenet2.component';
import { Componenet3Component } from './componenet3/componenet3.component';
import { Componenet4Component } from './componenet4/componenet4.component';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalsedesComponent } from './Modals/modalsedes/modalsedes.component';
import { ModalCodigoHabilitacionComponent } from './Modals/modal-codigo-habilitacion/modal-codigo-habilitacion.component';
import { ModalInfoPrestadorComponent } from './Modals/modal-info-prestador/modal-info-prestador.component';
import { ModalPrefijoFacturacionComponent } from './Modals/modal-prefijo-facturacion/modal-prefijo-facturacion.component';
import { ModalContactoPrestadorComponent } from './Modals/modal-contacto-prestador/modal-contacto-prestador.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    Componenet1Component,
    Componenet2Component,
    Componenet3Component,
    Componenet4Component,
    ModalsedesComponent,
    ModalCodigoHabilitacionComponent,
    ModalInfoPrestadorComponent,
    ModalPrefijoFacturacionComponent,
    ModalContactoPrestadorComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,  
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ ModalsedesComponent ]
})
export class AppModule { }
