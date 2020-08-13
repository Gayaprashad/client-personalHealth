import { Component, OnInit } from '@angular/core';
import {SugarService} from '../shared/health/sugar.service';

@Component({
  selector: 'app-sugar-list',
  templateUrl: './sugar-list.component.html',
  styleUrls: ['./sugar-list.component.css']
})
export class SugarListComponent implements OnInit {

  sugars :Array<any>;
  
  constructor(private sugarService:SugarService) { }

  ngOnInit(): void {

    this.sugarService.getAll().subscribe(data=>{
      this.sugars =data;
      for (var i=0;i<this.sugars.length;i++){
        this.sugars[i].recordDate = this.sugars[i].recordDate.slice(0,10);
      }
    });
  }

}
