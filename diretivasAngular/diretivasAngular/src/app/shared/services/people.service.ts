import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    
    let peopleArray = [
      {firstName: 'Wilson', lastName: 'Kanaiama', age: 20},
      {firstName: 'Didi', lastName: 'Kanaiama', age: 17},
      {firstName: 'Maria', lastName: 'Peres', age: 25},
    ]
    return of(peopleArray);
  }
};

