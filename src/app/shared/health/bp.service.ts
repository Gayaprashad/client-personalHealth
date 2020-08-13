import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BpData } from 'src/app/bp-data';
import {BpCover} from 'src/app/bp-cover';
//localhost:9090/get-all-bp
//localhost:9090/get-one-bp?id=1
//localhost:9090/set-all-bp
//localhost:9090/delete-bp?id=

@Injectable({
  providedIn: 'root'
})
export class BpService {

  public API ='//localhost:9090';

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.API+'/get-all-bp');
  }

  get(id:string){
    return this.http.get(this.API+'/get-one-bp?id='+id);
  }

  save(bpLocal:BpCover):Observable<any>{
    // console.log(bpLocal);
    if(bpLocal.getHref()=='/bp-add'){
      console.log("save() is executed");
      return this.http.post(this.API+'/set-bp-all',bpLocal.getBp());
    }else{
      console.log("save() is executed");
      return this.http.post(this.API+'/set-bp-one',bpLocal.getBp());
    }

  }

  removeRecord(id:string){
    return this.http.delete(this.API+'/delete-bp?id='+id);
  }
}
