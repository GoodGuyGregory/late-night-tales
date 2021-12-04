import { Component, OnInit } from '@angular/core';
import { Record } from 'src/app/Record';
import { RecordService } from '../../services/record.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  public myRecords: Record[] = [];

  constructor(public recordService: RecordService) { }

  ngOnInit(): void {
    this.myRecords = this.recordService.getRecords();
  }

}
