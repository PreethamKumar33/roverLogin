import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedPage: boolean[] = [true, false, false, false];

  onStepChange(args: boolean[]) {
    this.selectedPage = args;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
