import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rover-progress-bar',
  templateUrl: './rover-progress-bar.component.html',
  styleUrls: ['./rover-progress-bar.component.css']
})
export class RoverProgressBarComponent implements OnInit {

 @Input() docStatus : DocUploadStatus = {
   title : "",
   progress : 0,
   docType : "EXL"
 };

  constructor() { }

  ngOnInit(): void {
  }

}

export interface DocUploadStatus{
  title : string;
  progress : number;
  docType : string;
}
