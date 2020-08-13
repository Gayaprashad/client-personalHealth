import { Component, OnInit } from '@angular/core';
import { BpService } from '../shared/health/bp.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-bp-list',
  templateUrl: './bp-list.component.html',
  styleUrls: ['./bp-list.component.css']
})

export class BpListComponent implements OnInit {

  bps: Array<any>;

  constructor(private bpService :BpService) { }

  ngOnInit(): void {
    this.bpService.getAll().subscribe(data=> {
      this.bps = data;
      for (var i=0;i<this.bps.length;i++){
        this.bps[i].recordDate = this.bps[i].recordDate.slice(0,10);
      }
    })
    console.log(this.bps);
  }
}

