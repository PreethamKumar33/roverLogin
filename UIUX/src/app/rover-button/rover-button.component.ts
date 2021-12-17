import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rover-button',
  templateUrl: './rover-button.component.html',
  styleUrls: ['./rover-button.component.css']
})
export class RoverButtonComponent implements OnInit {

 @Input() label = ""
  constructor() { }

  ngOnInit(): void {
  }

}
