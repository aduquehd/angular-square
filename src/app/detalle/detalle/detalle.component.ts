import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlacesService} from '../../services/places.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id = null;
  place: any = {};

  constructor(private route: ActivatedRoute, private placesService: PlacesService) {
    console.log(this.route.snapshot.queryParams);

    this.id = this.route.snapshot.params['id'];
    this.place = this.placesService.findPlace(this.id);

  }


  ngOnInit() {
  }

}
