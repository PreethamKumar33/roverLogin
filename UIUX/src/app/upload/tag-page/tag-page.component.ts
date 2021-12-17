import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.css']
})
export class TagPageComponent implements OnInit {

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
