import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-tab-router';  
  navLinks: any[];
  activeLinkIndex = -1;
 
  constructor(
    private router: Router, 
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ) {
    this.matIconRegistry.addSvgIcon("edit",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Iconos/iconos-prestadores/ic-edit.svg"));
    this.matIconRegistry.addSvgIcon("add",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Iconos/iconos-prestadores/ic-add.svg"));
    this.matIconRegistry.addSvgIcon("adress-book",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Iconos/iconos-prestadores/ic-adress-book.svg"));
    this.matIconRegistry.addSvgIcon("code-check",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Iconos/iconos-prestadores/ic-code-check.svg"));
    this.matIconRegistry.addSvgIcon("invoice",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Iconos/iconos-prestadores/ic-invoice.svg"));
    this.matIconRegistry.addSvgIcon("email",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Iconos/iconos-prestadores/ic-mail.svg"));
    this.matIconRegistry.addSvgIcon("sedes",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Iconos/iconos-prestadores/ic-sedes.svg"));
    this.matIconRegistry.addSvgIcon("user",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Iconos/iconos-prestadores/ic-user.svg"));
    this.navLinks = [
        {
            label: 'Sedes',
            link: './first',
            icon: 'sedes',
            index: 0
        }, {
            label: 'Rangos de facturación',
            link: './second',
            icon: 'invoice',
            index: 1
        }, {
            label: 'Códigos de habilitación',
            link: './third',
            icon: 'code-check',
            index: 2
        }, 
        {
          label: 'Datos de contacto',
          link: './fourt',
          icon: 'adress-book',
          index: 3
      }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}

}
