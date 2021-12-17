import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rover-step',
  templateUrl: './rover-step.component.html',
  styleUrls: ['./rover-step.component.css']
})
export class RoverStepComponent implements OnInit {

@Input() step = "1";
@Input() selected = true;
@Input() label = "domain";

  constructor() { }

  ngOnInit(): void {
  }

}
