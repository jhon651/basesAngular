import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
    
  })
export class heroeComponent {
nombre: string = 'Ironman'
edad  : number = 24

 get nombreCapitalizado():string {
    return this.nombre.toUpperCase();
 }

obtenerNombre():string {
    return `${this.nombre} - ${this.edad}`;

   // return this.nombre + '-' + this.edad.toString
}

cambiarNombre(): void{
    this.nombre = 'Spiderman'
    //this.edad = 25
}
cambiarEdad():void{
    this.edad = 25
}


}