import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the SharedData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SharedData {
  private static data = {};

  constructor(){
    SharedData.data = {};
  }

  public static setData(key:string, value:any){
    this.data[key] = value;   
    
  }

  public static getData(key:string){
    if(this.data[key]){
      return this.data[key];
    }else {
      return false;
    }
  }
}

