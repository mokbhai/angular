import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usr1',
  templateUrl: './usr1.component.html',
  styleUrls: ['./usr1.component.css']
})
export class Usr1Component implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }  

  clickFunc() {
    this.router.navigate(['/home']);
  }

}
