import {Component} from '@angular/core';
import {PlacesService} from '../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})

export class PlacesComponent {
  myName: string;
  lat: any = 6.1532243;
  lng: any = -75.607281;
  places = null;

  constructor(private placesService: PlacesService) {
    placesService.getPlaces()
      .valueChanges().subscribe((places) => {
      this.places = places;
    });
  }
}
