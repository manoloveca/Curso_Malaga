import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos3',
  templateUrl: './datos3.component.html',
  styleUrls: ['./datos3.component.css']
})
export class Datos3Component implements OnInit {
  sNombre: string;
  constructor() { }

  ngOnInit() {

    this.sNombre = '';
  }

  btnBorrar() {
    this.sNombre = '';
  }

}
