import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit, OnDestroy {

  groups: Array<any> = [];

  listObservables$:Array<Subscription> = [];
  // showText = true;
  // case: number = 4;

  constructor() { }

  ngOnDestroy(): void {
        this.listObservables$.forEach((subscriptions) => subscriptions.unsubscribe());
        console.log('Me voy a destruir');
    }

  //results:Array<string> = ['Respuesta 1','Respuesta 2','Respuesta 3','Respuesta 4'];
  //resultsFilter:Array<string> = [];
  //resultsUpdated:Array<string> = ['Update 1','Update 2'];

  /*listUser:Array<{id:string, name:string}> = [
    {
      id:'1',
      name:'Ivancho'
    },
    {
      id:'2',
      name:'Juancho'
    },
    {
      id:'3',
      name:'Pancho'
    }
  ];*/

  ngOnInit(): void {

    /*const observer1$ = interval(1000).subscribe((res) => {
      console.log('llamando')
    })
    this.listObservables$ = [observer1$];*/

    this.groups = [
      {
        label: 'Nuevas Tareas',
        color: 'green',
        list: [
          {
            order: 'Como Instalar Angular',
            items: [
              {
                key: 'price',
                value: 152
              },
              {
                key: 'time',
                value: 152
              },
              {
                key: 'author',
                value: {
                  name: 'Ivan Urbano',
                  avatar: 'https://avatars.githubusercontent.com/u/15802366?v=4'
                }
              }
            ]
          },
          {
            order: 'Como Desinstalar Node',
            items: [
              {
                key: 'price',
                value: 152
              },
              {
                key: 'time',
                value: 152
              },
              {
                key: 'author',
                value: {
                  name: 'Juan Urbano',
                  avatar: 'https://avatars.githubusercontent.com/u/15802366?v=4'
                }
              }
            ]
          }
          ]
      },
      /*{
        label: 'Trabajando',
        color: 'green',
        list: [
          {
            order: 'Como Instalar WordPress',
            items: [
              {
                key: 'price',
                value: 122
              },
              {
                key: 'time',
                value: 122
              },
              {
                key: 'author',
                value: {
                  name: 'Daniel Urbano',
                  avatar: 'https://avatars.githubusercontent.com/u/15802366?v=4'
                }
              }
            ]
          }
        ]
      },
      {
        label: 'Realizadas',
        color: 'green',
        list: [
          {
            order: 'Como Desactivar CLI',
            items: [
              {
                key: 'price',
                value: 132
              },
              {
                key: 'time',
                value: 132
              },
              {
                key: 'author',
                value: {
                  name: 'Ruben Urbano',
                  avatar: 'https://avatars.githubusercontent.com/u/15802366?v=4'
                }
              }
            ]
          }
        ]
      }*/
    ]
  }

  //* funcion para mostrar u ocultar un texto dentro del html del componente
  /*changeText():void {
    this.showText = !this.showText;
  }*/

}
