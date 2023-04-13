import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count:number = 0;

  constructor() {

  }

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++

      if(this.count == 10) {
        clearInterval(interval);
      }
    }, 700)
  }

}
