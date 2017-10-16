import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {RouterModule, Routes} from '@angular/router';
import {ResaltarDirective} from './directive/resaltar.directive';
import {ContarClicksDirective} from './directive/contar-clicks.directive';
import {DetalleComponent} from './detalle/detalle/detalle.component';
import {PlacesComponent} from './places/places.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Test1Component } from './test1/test1.component';

const appRoute: Routes = [
  {path: '', component: PlacesComponent},
  {path: 'lugares', component: PlacesComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    PlacesComponent,
    ContactoComponent,
    Test1Component,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDuzcT3ESAHVuPd78XlX3nKHow8GjrTTic'
    }),
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
