import { Component, OnInit } from '@angular/core';
import { ModalsedesComponent } from '../Modals/modalsedes/modalsedes.component'
import {MatDialog, MatDialogConfig} from '@angular/material'
import { sedesservice} from '../services/sedes.service'

@Component({
  selector: 'app-componenet1',
  templateUrl: './componenet1.component.html',
  styleUrls: ['./componenet1.component.css']
})
export class Componenet1Component implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    //falta la carga de las sedes
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(ModalsedesComponent, dialogConfig)
  }

}
