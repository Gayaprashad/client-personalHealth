import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SugarCover} from '../../sugar-cover';

@Injectable({
  providedIn: 'root'
})

export class SugarService {

  public API ='//localhost:9090';

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.API+'/get-all-sugar');
  }

  get(id:string){
    return this.http.get(this.API+'/get-one-sugar?id='+id);
  }

  save(sugarLocal:SugarCover):Observable<any>{
    // console.log(bpLocal);
    if(sugarLocal.getHref()=='/sugar-add'){
      console.log("save() is executed");
      return this.http.post(this.API+'/set-sugar-all',sugarLocal.getSugar());
      console.log("statement after post");
    }else{
      console.log(sugarLocal);
      console.log("save() is executed");
      return this.http.post(this.API+'/set-sugar-one',sugarLocal.getSugar());
      console.log("statement after post");
    }

  }

  removeRecord(id:string){
    return this.http.delete(this.API+'/delete-sugar?id='+id);
  }
}
