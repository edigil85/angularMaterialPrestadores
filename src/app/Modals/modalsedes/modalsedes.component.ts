import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material'
import { sedesservice } from '../../services/sedes.service'

@Component({
  selector: 'app-modalsedes',
  templateUrl: './modalsedes.component.html',
  styleUrls: ['./modalsedes.component.css']
})
export class ModalsedesComponent implements OnInit {

  constructor(
    private service: sedesservice,
    public dialogRef: MatDialogRef<ModalsedesComponent>
  ) { }

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
