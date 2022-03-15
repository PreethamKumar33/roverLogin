import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rover-stepper',
  templateUrl: './rover-stepper.component.html',
  styleUrls: ['./rover-stepper.component.css']
})
export class RoverStepperComponent implements OnInit {

  selected : boolean[] = [true, false, false, false];
  @Output() stepChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onNextClick(){
    let i = this.getSelectedindex();
    if(i===3) return ;
    this.selected[i]= false;
    this.selected[i+1]=true;
    this.stepChange.emit(this.selected);
  }

  onPrevClick(){
    let i = this.getSelectedindex();
    if(i===0) return ;
    this.selected[i]= false;
    this.selected[i-1]=true;
    this.stepChange.emit(this.selected);
  }

  getSelectedindex(){
    let i=0;
    for(i; i<this.selected.length; i++){
      if(this.selected[i]) break;
    }
    return i;
  }

}
