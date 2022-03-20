import { Component, OnInit } from '@angular/core';
import { RecordService } from 'src/app/services/record.service';
import { Record } from 'src/app/Record';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  public myRecords: Record[] = [];
  public loading: boolean;

  constructor(private recordService: RecordService) { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.myRecords = this.recordService.localRecords
      this.loading = false;
    }, 3000);
  }

}
