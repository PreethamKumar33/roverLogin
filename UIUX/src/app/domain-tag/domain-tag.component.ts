import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'domain-tag',
  templateUrl: './domain-tag.component.html',
  styleUrls: ['./domain-tag.component.css']
})
export class DomainTagComponent implements OnInit {
  
@Input() chip:RoverChip = {name : "Retail Banking",selected :  true};

  constructor() { }

  ngOnInit(): void {
    }

onChipClick(){
  this.chip.selected = !this.chip.selected;
}

}

export interface RoverChip{
  name : string;
  selected : boolean;
};
