import {Component} from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})

export class PlacesComponent {
  persons: any = [
    {age: 20, name: 'Andres Duque'},
    {age: 19, name: 'Sharay Granados'},
    {age: 13, name: 'Esteban Higuita'},
    {age: 29, name: 'Tatiana Zuluaga'},
    {age: 50, name: 'Javier Duque'},
    {age: 14, name: 'Sebastian'},
  ];
  places: any = [
    {id: 1, plan: 'pago', proximity: 1, distance: 1.4, is_active: true, name: 'Veterinaria huellitas felices'},
    {id: 2, plan: 'gratuito', proximity: 1, distance: 2.8, is_active: false, name: 'Sushi House'},
    {id: 3, plan: 'pago', proximity: 2, distance: 14.4, is_active: true, name: 'Creeps y Wafles'},
    {id: 4, plan: 'pago', proximity: 2, distance: 21.6, is_active: false, name: 'Kanú'},
    {id: 5, plan: 'gratuito', proximity: 2, distance: 30.4, is_active: true, name: 'Kiwi'},
    {id: 6, plan: 'pago', proximity: 3, distance: 87.3, is_active: true, name: 'BBC'},
    {id: 1, plan: 'pago', proximity: 3, distance: 100.7, is_active: true, name: 'Atom House'},
  ];
  myName: string;
  lat: any = 6.1532243;
  lng: any = -75.607281;

  constructor() {

  }
}
