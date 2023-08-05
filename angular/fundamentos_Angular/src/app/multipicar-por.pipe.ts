import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multipicarPor'
})
export class MultipicarPorPipe implements PipeTransform {

  transform(valor: number, multiplicador: number): unknown {
    return valor * multiplicador;
  }

}
