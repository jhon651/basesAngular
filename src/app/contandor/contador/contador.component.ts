import{ Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
<div class="container">
  <h1>Hola mundo</h1>
  <div class="row">
    <button class="btn btn-primary" (click)="acumular(+2)"> > + 1</button>
    <span> {{numero}} </span>
    <button class="btn btn-primary" (click)="acumular(-2)"> > - 2</button>
  </div>

  <div class="row">
    <button class="btn btn-primary" (click)="incremento(base)"> > + {{base}}</button>
    <span> {{otro}} </span>
    <button class="btn btn-primary" (click)="incremento(-base)"> > - {{base}}</button>
  </div>
 

</div>  
    
    `
})


export class contadorComponent{
    public title :string= 'Heyyyy!!!';
    numero: number = 20;
     base: number = 5;
     otro: number = 10
    acumular(valor:number){
     
     this.numero += valor;
   
    }
   
    
    incremento(alor:number){
     this.otro += alor;
     
    }
}