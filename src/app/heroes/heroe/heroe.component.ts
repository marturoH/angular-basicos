import { Component } from "@angular/core";


//en azul es un getter
// en morado es una funcion

//azul cuadrado para que pinte el import
@Component ({
selector: 'app-heroe',
templateUrl: 'heroe.component.html'

})
export class HeroeComponent {

nombre: string = 'Iroman';
edad  : number = 30

get nombreMayuscula(): string{
    return this.nombre.toUpperCase();
}

obtenerNombre(): string {
    return `${ this.nombre } - ${ this.edad }`;
    // return this.nombre + '-' + this.edad; // seria igual
}
// Metodo cambiarNombre
cambiarNombre(): void {
  console.log(' estamos en nombre...')
  this.nombre = 'Spiderman';
}
// Metodo cambiarEdad

cambiarEdad(): void {
  console.log('Milton.....');
  this.edad =  37;
}

}