import { Component, OnInit } from '@angular/core';
import { celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares : celular[] = [
    {
      id: 1,
      name: "Sansung A1",
      description: "preto",
      soldOff: true
    },
    {
      id: 2,
      name: "Sansung S22 Utra",
      soldOff: true
    },
    {
      id: 3,
      name: "Motorola",
      description: "braco",
      soldOff: true
    },
    {
      id: 4,
      name: "iphone 14 pro Max",
      description: "preto",
      soldOff: false
    }
  ]
}
