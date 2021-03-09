import { Component } from '@angular/core';
import { Z_DATA_ERROR } from 'zlib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:String = 'Capitan America';
  nombre2:string='JoHn ERiKc ObaNDo RAmiReZ'
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  personajes: string[]=['Ironman','spiderman','Thor','Loki','Groot'];
  PI: number=Math.PI;
  porcentaje:number = 0.234;
  salario: number = 1234.5;
  fecha:Date = new Date();
  activar:boolean = true;

  idioma : string = 'es';
  videoUrl: string = 'https://www.youtube.com/embed/ugn6fM5Rc-E';

  valorPromesa = new Promise<string>((resolve)=>{
    setTimeout(()=>{
        resolve('llego la data');
    },4500);
  });

  heroe={
    nombre:'Logan',
    clave:'Wolverine',
    edad: 500,
    direccion:{
      calle: 'primera',
      casa: 20
    }
  }

}
