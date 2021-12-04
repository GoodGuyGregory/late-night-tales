import { Component, Input, OnInit } from '@angular/core';
import { Record } from 'src/app/Record';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  @Input() records: Record[];

  public recordList: Record[];

  constructor() { }

  ngOnInit(): void {
    this.recordList = this.records;
  }

}
