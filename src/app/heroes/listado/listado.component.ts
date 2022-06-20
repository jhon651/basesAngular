import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
heroes: string[] = [
  'Goku', 'Veggeta', 'Naruto', 'Uchiha Susake'
]
heroeBorrado: string = ''

  constructor() { 
 
  }

  borrar(){
    console.log("Borrando")
    this.heroeBorrado = this.heroes.shift() || ''
    console.log('Borraron a: ' + this.heroeBorrado)
    return this.heroeBorrado
  }
}

