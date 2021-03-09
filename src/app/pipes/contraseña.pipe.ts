import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContraseñaPipe implements PipeTransform {

  transform(value: string, activar:boolean= true ): string {
 
    return (activar) ? '*'.repeat(value.length):value;
  }

}
