import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count:number = 0;

  nome: string = 'Didi Kanaia Natan';

  text: string = "";


  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0
    },
  ];

  constructor(private peopleServices: PeopleService ) {

  }

  ngOnInit(): void {
    this.getPeople();
    console.log(this.pessoas);
    let interval = setInterval(() => {
      this.count++

      if(this.count == 10) {
        clearInterval(interval);
      }
    }, 700)
  }

 clicou(nome: string): void {
    console.log('Clicou em mim!', nome);
  }


  getPeople() {
    this.peopleServices.getPeople().subscribe(people => {
      this.pessoas = people;
    });
  }
}
