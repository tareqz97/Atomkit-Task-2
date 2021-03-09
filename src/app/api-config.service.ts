import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor(private http: HttpClient) { }
  getBoxes(){
    return this.http.get("http://185.96.69.234:7000/OCR/1.pdf?level=4")
  }
}
