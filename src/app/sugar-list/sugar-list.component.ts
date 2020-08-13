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
    });
  }

}
