import { Component, Input, OnInit } from '@angular/core';
import { Record } from 'src/app/Record';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  public myRecords: Record[] = [];
  public loading: boolean;


  constructor(private recordService: RecordService) { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.myRecords = this.recordService.localRecords;
      this.loading = false;
    }, 3000);
  }

}
