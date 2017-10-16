import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  xname: any;
  places: any = [
    {
      id: 1,
      plan: 'pago',
      proximity: 1,
      distance: 1.4,
      is_active: true,
      name: 'Veterinaria huellitas felices',
      description: 'Descripción de este negocio. Más adelante tendremos más información'
    },
    {
      id: 2,
      plan: 'gratuito',
      proximity: 1,
      distance: 2.8,
      is_active: false,
      name: 'Sushi House',
      description: 'Descripción de este negocio. Más adelante tendremos más información'
    },
    {
      id: 3,
      plan: 'pago',
      proximity: 2,
      distance: 14.4,
      is_active: true,
      name: 'Creeps y Wafles',
      description: 'Descripción de este negocio. Más adelante tendremos más información'
    },
    {
      id: 4,
      plan: 'pago',
      proximity: 2,
      distance: 21.6,
      is_active: false,
      name: 'Kanú',
      description: 'Descripción de este negocio. Más adelante tendremos más información'
    },
    {
      id: 5,
      plan: 'gratuito',
      proximity: 2,
      distance: 30.4,
      is_active: true,
      name: 'Kiwi',
      description: 'Descripción de este negocio. Más adelante tendremos más información'
    },
    {
      id: 6,
      plan: 'pago',
      proximity: 3,
      distance: 87.3,
      is_active: true,
      name: 'BBC',
      description: 'Descripción de este negocio. Más adelante tendremos más información'
    },
    {
      id: 1,
      plan: 'pago',
      pplan: 'pagado',
      roximity: 3,
      distance: 100.7,
      is_active: true,
      name: 'Atom House',
      description: 'Descripción de este negocio. Más adelante tendremos más información'
    },
  ];

  id = null;
  lugar: any = {};

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.queryParams);
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.lugar = this.buscarLugar();

  }

  buscarLugar() {
    return this.places.filter((lugar) => lugar.id == this.id)[0] || null;
  }

  ngOnInit() {
  }

}
