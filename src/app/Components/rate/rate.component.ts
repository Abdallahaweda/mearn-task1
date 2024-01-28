import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rate',

  templateUrl: './rate.component.html',
  styleUrl: './rate.component.css'
})
export class RateComponent {

@Input() val:number=0
@Output() event:EventEmitter<string>=new EventEmitter<string>();
rate(val:string){
this.event.emit(val)

}
}
