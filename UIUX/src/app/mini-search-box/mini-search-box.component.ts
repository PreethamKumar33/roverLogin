import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mini-search-box',
  templateUrl: './mini-search-box.component.html',
  styleUrls: ['./mini-search-box.component.css']
})
export class MiniSearchBoxComponent implements OnInit {
@Input() placeholderText="";
  constructor() { }

  ngOnInit(): void {
  }

}
