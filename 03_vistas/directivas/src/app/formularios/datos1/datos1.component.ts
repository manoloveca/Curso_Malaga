import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {
  sIdea: string;
  aIdeas: Array<string>;
  estilo: {};
  precio: number;

  constructor() { }

  ngOnInit() {
    this.sIdea = '';
    this.aIdeas = [];
    this.estilo = {'color': 'blue', 'font-size': 2};
    this.precio = 23;
  }

  btnInsert() {
    if (this.sIdea !== '') {
      this.aIdeas.push(this.sIdea);
    }
    this.sIdea = '';
  }

}
