import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: any = true;
  names: any=[];
  bg = false;
  hh = 0;
  constructor() { 

 this.names = ['michel', 'traver', 'frankleen', 'shitty'];
}
  ngOnInit(): void {
 }

}
