import { Component, OnInit } from '@angular/core';
import { DocUploadStatus } from 'src/app/rover-progress-bar/rover-progress-bar.component';

@Component({
  selector: 'upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit {

  documents: DocUploadStatus[] = [
    {title : "contract 435", progress :  100,docType: "EXL"},
    {title : "contract 102", progress :   70,docType: "EXL"},
    {title : "contract 320", progress :  70,docType: "EXL"},
    {title : "contract 830", progress :  70,docType: "EXL"},
    {title : "contract 314", progress :  70,docType: "EXL"},
    {title : "contract 342", progress :  70,docType: "DOC"},
    {title : "contract 344", progress :  70,docType: "DOC"},
    {title : "contract 987", progress :  70,docType: "DOC"},
    {title : "contract 448", progress :  70,docType: "PDF"},
    {title : "contract 413", progress :  70,docType: "PDF"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
