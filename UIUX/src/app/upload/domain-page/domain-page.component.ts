import { Component, OnInit } from '@angular/core';
import { RoverChip } from '../../domain-tag/domain-tag.component';

@Component({
  selector: 'domain-page',
  templateUrl: './domain-page.component.html',
  styleUrls: ['./domain-page.component.css']
})
export class DomainPageComponent implements OnInit {
  title = 'rover-demo';
  myChip:RoverChip = {name:"PTO", selected:true};

  financeDomains = [
    {name : "Retail Banking", selected : false},
    {name : "Commercial Banking", selected : false},
    {name : "Coorporate Banking", selected : false},
    {name : "Savings and Deposits", selected : false},
    {name : "Lending", selected : false},
    {name : "Payment and Settlement", selected : false},
    {name : "Mortgage", selected : false},
    {name : "Organizational", selected : false},
    {name : "Credit Card", selected : false}
  ];

  educationDomains = [
    {name : "Educational Services", selected : false},
    {name : "Elementary and Secondary Schools", selected : false},
    {name : "Junior colleges", selected : false},
    {name : "Colleges, Universities", selected : false},
    {name : "Lending", selected : false},
    {name : "Business Schools", selected : false},
    {name : "Computer Trainings", selected : false},
    {name : "Technical and Trade Schools", selected : false},
    {name : "Educational Support Services", selected : false}
  ];

  concepts = [
    {name : "Person", selected:true},
    {name : "NORP", selected:true},
    {name : "Facility", selected:true},
    {name : "ORG", selected:true},
    {name : "GPE", selected:true},
    {name : "LOC", selected:true},
    {name : "Product", selected:true},
    {name : "Event", selected:true},
    {name : "Work of Art", selected:true},
    {name : "LAW", selected:true},
    {name : "Language", selected:true},
    {name : "Date", selected:true},
    {name : "Time", selected:true}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
