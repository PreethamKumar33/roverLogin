import { Component, Input, OnInit } from '@angular/core';
import { RoverChip } from '../domain-tag/domain-tag.component';

@Component({
  selector: 'display-chips',
  templateUrl: './display-chips.component.html',
  styleUrls: ['./display-chips.component.css']
})
export class DisplayChipsComponent implements OnInit {

 @Input() title="";
 @Input() isDomain:boolean = true;
 @Input() categories:RoverChip[] = [];
 @Input() isTag: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

}
