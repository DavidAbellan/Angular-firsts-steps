import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
    @Input() valor:number;
    @Input() valorInicial:number;
    @Input() max:number;
    @Input() min:number;
    @Input() step:number; 
   constructor() {
     
     
  }
  sumar(){
    if(this.valor + this.step <= this.max)
    this.valor = this.valor + this.step;
    
  }
  restar(){
    if(this.valor > this.min)    
    this.valor --;
    
  }
  
  
  ngOnInit() {
    this.valor = this.valorInicial;
  }

}
