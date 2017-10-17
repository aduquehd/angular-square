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
import {ContactoComponent} from './contacto/contacto.component';
import {Test1Component} from './test1/test1.component';
import {PlacesService} from './services/places.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { CreatePlaceComponent } from './create-place/create-place.component';

const appRoute: Routes = [
  {path: '', component: PlacesComponent},
  {path: 'lugares', component: PlacesComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'createplace', component: CreatePlaceComponent},
];

export const firebaseConfig = {
  // projectId: "platzi-square-1508135757346",
  apiKey: "AIzaSyBINHq6aO-YXnMpwbk-BmYiaohV8LektHs",
  authDomain: "platzi-square-1508135757346.firebaseapp.com",
  databaseURL: "https://platzi-square-1508135757346.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "606929447143"
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    PlacesComponent,
    ContactoComponent,
    Test1Component,
    CreatePlaceComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDuzcT3ESAHVuPd78XlX3nKHow8GjrTTic'
    }),
    RouterModule.forRoot(appRoute),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    PlacesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
