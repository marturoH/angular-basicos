import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent {
// arreglo de string  en la Propiedad heroes
heroes: string [] = ['Goku', 'Iroman','Batman','Robin', 'Holk'];
heroeBorrado: string = '';

marcas: string [] = ['Toyota', 'Nissan', 'Jeep', 'Mercedes'];
marcaBorrado: string = ''; 

alumnos: string [] = ['Anita', 'Luisa', 'Ruben', 'Gonzalo', 'Leonardo'];
alumnoBorrado: string = ''; //|| false || null || undefined

// Se crea el metodo borrarHeroe
borrarHeroe(){
 this.heroeBorrado = this.heroes.shift() || '';  
}
borrarMarca(){
 this.marcaBorrado = this.marcas.shift() || '';
}
borrarAlumno(){
  this.alumnoBorrado = this.alumnos.shift() || '';
}

}
