import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  ValorInputInicial = 1;


  contadores = [{
  min:1,
  max:100,
  step:5,
  valorInicial:this.ValorInputInicial
  },{
  min:1,
  max:100,
  step:5,
  valorInicial:this.ValorInputInicial},
  { 
  min:1,
  max:100,
  step:5,
  valorInicial:this.ValorInputInicial}];
  title = 'angularcounter';

  anadir(){
    this.contadores.push({min:1,max:10,step:2,valorInicial:this.ValorInputInicial})
  }

}
