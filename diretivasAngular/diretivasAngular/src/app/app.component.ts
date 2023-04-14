import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count:number = 0;

  nome = 'Didi Kanaia Natan'
  pessoas = [
    {nome: "Ivone", sobrenome: "Silva"},
    {nome: "Marcio", sobrenome: "Santos"},
    {nome: "Didi", sobrenome: "Pereira"},
    {nome: "Natan", sobrenome: "Kanaia"}
  ];

  constructor() {

  }

  ngOnInit(): void {
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

}
