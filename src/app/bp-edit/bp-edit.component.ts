import { Component, OnInit } from '@angular/core';
import { BpData } from '../bp-data';
import { BpService} from '../shared/health/bp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import {BpCover} from '../bp-cover';
import { LocationChangeEvent } from '@angular/common';

@Component({
  selector: 'app-bp-edit',
  templateUrl: './bp-edit.component.html',
  styleUrls: ['./bp-edit.component.css']
})
export class BpEditComponent implements OnInit {

  bpLocal=new BpData("",'','','','');
  bpData :any={};
  bpCover :any;
  sub:Subscription;
  idG: BigInteger;

  constructor(private route:ActivatedRoute, private router:Router,private bpService:BpService) { }

  ngOnInit(): void {
    this.sub=this.route.params.subscribe(params=>{
      const id=params.id;
      this.idG=id;
      if(id){
        this.bpService.get(id).subscribe((bp:any)=>{
          if(bp){
            console.log(bp);
            console.log("id is executed");
            var dated = bp.recordDate.slice(0,10);
            this.bpData= new BpData(bp.id,dated,bp.morning,bp.afternoon,bp.night);
            this.bpLocal=this.bpData;
          }
        });
      }
    });
    
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  
  gotoList(){
    this.router.navigate(['/bp-list']);
  }

  onSubmit(){
    this.bpLocal.recordDate+='T00:00:00';
    if(this.idG){
      this.bpCover =new BpCover(this.bpLocal,'/bp-edit');
      this.bpService.save(this.bpCover).subscribe(result=>{
        console.log("Bp service is called");
        this.gotoList();
      },error=> console.error(error));
    }else{
      this.bpCover=new BpCover(this.bpLocal,'/bp-add')
      this.bpService.save(this.bpCover).subscribe(result=>{
        console.log("Bp service is called");
        this.gotoList();
      },error=> console.error(error));
    }
    
  }

  remove(id:string){
    console.log(id);
    this.bpService.removeRecord(id).subscribe(result=>{
      console.log("remove function is called");
      this.gotoList();
    },error=>console.error(error));
  }

}
