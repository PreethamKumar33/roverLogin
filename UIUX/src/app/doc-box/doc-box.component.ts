import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'doc-box',
  templateUrl: './doc-box.component.html',
  styleUrls: ['./doc-box.component.css']
})
export class DocBoxComponent implements OnInit {

 @Input() docType="DOC";
 @Input() numberOfDocs="";
  constructor() { }

  ngOnInit(): void {
  }

}
