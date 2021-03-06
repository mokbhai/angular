import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { Usr1Component } from './component1/usr1/usr1.component';
import { Usr2Component } from './component2/usr2/usr2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'usr1', component: Usr1Component },
  { path: 'usr2', component: Usr2Component },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
