import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../services/places.service';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css']
})
export class CreatePlaceComponent implements OnInit {
  place: any = {};
  constructor(private placeService: PlacesService) {
  }

  savePlace() {
    this.place.id = Date.now();
    this.placeService.savePlace(this.place);
    alert('Place saved successfully');
    this.place = {};
  }


  ngOnInit() {
  }

}
