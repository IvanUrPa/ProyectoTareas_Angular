import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace'
})
export class ReplaceSpacePipe implements PipeTransform {

  //* Quitar los espacios en blanco
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
