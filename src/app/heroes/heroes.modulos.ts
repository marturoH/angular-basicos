import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
//import y escoge al cuadradro + tab statement
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";



@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
         CommonModule
    ]
})
export class HeroesModule {

}