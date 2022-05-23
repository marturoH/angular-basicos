import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador/contador.module';
// import { ContadorComponent } from './contador/contador/contador.component';
// import { ContadorComponent } from './contador.component';
import { HeroesModule } from './heroes/heroes.modulos';
// import { HeroeComponent } from './heroes/heroe/heroe.component';   
// import { ListadoComponent } from './heroes/listado/listado.component';




@NgModule({  // para que agregue al import escoge el tipo 8 en naranj o azul
  declarations: [
    AppComponent,
    // ContadorComponent,
   
    //  HeroeComponent,
    //  ListadoComponent
  
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
