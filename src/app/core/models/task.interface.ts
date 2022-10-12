import {UserInterface} from "@core/models/user.interface";

export interface TaskInterface {
  id: string | number; //TODO | permite que el tipo de dato sea string o numero
  title: string;
  // tags:Array<any>; //TODO any permite indicar que el tipo de dato puede ser de cualquier tipo
  // tags:Array<string>; //TODO esta también es otra manera de declarar un arreglo
  tags: string[];
  user: UserInterface;
  status: 'in-progress' | 'completed' | 'wait';
}
