import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world', //// etiqueta HTML
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
 
})
export class HelloWorldComponent implements OnInit {
  saludo: string //// hay que definir los tipos fuera
  constructor() { 
    this.saludo = 'hola mundo';
  
  }

  ngOnInit() {//////component did mount, si lo borras hay que borrar arriba OnInit también

    
  }

}
