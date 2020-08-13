import { Component, OnInit } from '@angular/core';
import {SugarData} from '../sugar-data';
import {SugarService} from '../shared/health/sugar.service';
import {ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import {Subscription } from 'rxjs';
import { SugarCover } from '../sugar-cover';
import {LocationChangeEvent } from '@angular/common';


@Component({
  selector: 'app-sugar-edit',
  templateUrl: './sugar-edit.component.html',
  styleUrls: ['./sugar-edit.component.css']
})
export class SugarEditComponent implements OnInit {

  sugarLocal=new SugarData("",'','','','');
  sugarData :any={};
  sugarCover :any;
  sub:Subscription;
  idG: BigInteger;

  constructor(private route:ActivatedRoute, private router:Router,private sugarService:SugarService) { }

  ngOnInit(): void {
    this.sub=this.route.params.subscribe(params=>{
      const id=params.id;
      this.idG=id;
      if(id){
        this.sugarService.get(id).subscribe((sugar:any)=>{
          if(sugar){
            console.log(sugar);
            console.log("id is executed");
            var dated = sugar.recordDate.slice(0,10);
            this.sugarData= new SugarData(sugar.id,dated,sugar.morning,sugar.afternoon,sugar.night);
            this.sugarLocal=this.sugarData;
            console.log(this.sugarLocal.recordDate);
          }
        });
      }
    });
    
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  gotoList(){
    console.log("router is executed")
    this.router.navigate(['/sugar-list']);
  }

  onSubmit(){
    this.sugarLocal.recordDate+='T00:00:00';
    if(this.idG){
      this.sugarCover =new SugarCover(this.sugarLocal,'/sugar-edit');
      this.sugarService.save(this.sugarCover).subscribe(result=>{
        console.log("Sugar service is called");
        this.gotoList();
      },error=> console.error(error));
    }else{
      this.sugarCover=new SugarCover(this.sugarLocal,'/sugar-add')
      this.sugarService.save(this.sugarCover).subscribe(result=>{
        console.log("Sugar service is called");
        this.gotoList();
      },error=> console.error(error));
    }
    
  }

  remove(id:string){
    console.log(id);
    this.sugarService.removeRecord(id).subscribe(result=>{
      console.log("remove function is called");
      this.gotoList();
    },error=>console.error(error));
  }

}
