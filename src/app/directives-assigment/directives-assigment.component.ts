import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-assigment',
  templateUrl: './directives-assigment.component.html',
  styleUrls: ['./directives-assigment.component.css']
})
export class DirectivesAssigmentComponent implements OnInit {
  toogleStatus = true;
  logs = [];
  temp = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onToogle() {
    this.toogleStatus = !this.toogleStatus;
    this.temp++;
    this.logs.push(this.temp);
  }
}
