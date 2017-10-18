import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro.model';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {
  oLibro: Libro;

  constructor() { }

  ngOnInit() {
    this.oLibro = {
    autor: '',
    titulo: '',
    editorial: '',
    exlibris: false,
    numpag: 0,
    generos: []
    }
  }

  btnInsert() {
  }

}