import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  formador: string;
  empresa: string;
  fecha: Date;

  constructor() {

   }

  ngOnInit() {
    this.formador = 'Alejandro Cereza Lasne';
    this.empresa = 'Icono Trainig Consulting';
    this.fecha = new Date();
  }

}
