import { Component, OnInit } from '@angular/core';
import { Libro, Pais } from '../libro.model';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {
  oLibro: Libro;
  aPaises: Array<Pais>;

  constructor() { }

  ngOnInit() {
    this.oLibro = {
    autor: '',
    titulo: '',
    editorial: '',
    exlibris: false,
    numpag: 0,
    genero: ''
    };
    this.aPaises = [];
  }

  btnInsert() {
  }

}
