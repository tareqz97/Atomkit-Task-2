import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import { map, reduce } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private apiConfigService : ApiConfigService) { }
  title = 'Atomkit-Task2';
  boxes;
  ngOnInit(): void {
    this.showBoxes();
  }
  showBoxes() {
    this.apiConfigService.getBoxes()
    .pipe(
      map(responseData => {
        return responseData["boxes"][0];
      })
    )
    .subscribe(data => this.boxes = data);
  
  }
}
