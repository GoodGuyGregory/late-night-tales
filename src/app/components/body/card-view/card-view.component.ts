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
      this.recordService.getRecords().subscribe((records) => {
        // implements Fisher Yates Randomization Shuffle
        let m = records.length, t, i;

        while (m) {

          i = Math.floor(Math.random() * m--);

          t = records[m];
          records[m] = records[i];
          records[i] = t;
        }

        this.myRecords = records
      })
      this.loading = false;
    }, 3000);
  }

}
