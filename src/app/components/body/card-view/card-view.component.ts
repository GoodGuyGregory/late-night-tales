import { Component, Input, OnInit } from '@angular/core';
import { Record } from 'src/app/Record';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  @Input() record: Record[];



  constructor() { }

  ngOnInit(): void {

  }

}
