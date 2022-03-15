import { Component, Input, OnInit } from '@angular/core';
import { RoverChip } from '../domain-tag/domain-tag.component';

@Component({
  selector: 'concept-tag',
  templateUrl: './concept-tag.component.html',
  styleUrls: ['./concept-tag.component.css']
})
export class ConceptTagComponent implements OnInit {

 @Input() chip:RoverChip = {name:"Language", selected:true};

  constructor() { }

  ngOnInit(): void {
  }

  onChipClick(){
    this.chip.selected= !this.chip.selected;
  }
}
