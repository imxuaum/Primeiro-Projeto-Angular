import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomarService {

  constructor() { }

  somar(v1:number, v2:number):number{
    return v1+v2;
  }
}
