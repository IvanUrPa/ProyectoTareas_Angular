import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  ElementRef,
  Input, OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {interval} from 'rxjs';
import {TestCourseService} from "@shared/services/test-course.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, AfterViewInit, AfterViewChecked, DoCheck, OnChanges {

  @ViewChild('refId') elementRefId: ElementRef = new ElementRef('')
  @Input() idOrder: string | number = 0;
  @Input() items: Array<any> = [];

  constructor(private testCourseService:TestCourseService, private render2:Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
        //console.log(changes)
    }

  ngDoCheck(): void {
        //console.log('hola docheck');
    }

  ngAfterViewChecked(): void {
        //console.log('hola mundo')
    }

  ngAfterViewInit(): void {
    //console.log('aqui estoy', this.elementRefId);
    /*const elementTitle = this.elementRefId.nativeElement;
    this.render2.setStyle(elementTitle,'color','red')*/
    }

  ngOnInit(): void {
    /*interval(1000).subscribe(()=> {
      this.idOrder = Date.now();
    })*/
  }

  sendData():void {
    this.testCourseService.setData('Hola desde card');
  }

}
