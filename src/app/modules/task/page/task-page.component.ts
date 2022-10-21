import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  // showText = true;

  case: number = 5800;

  constructor() { }

  ngOnInit(): void {
  }

  //* funcion para mostrar u ocultar un texto dentro del html del componente
  /*changeText():void {
    this.showText = !this.showText;
  }*/

}
