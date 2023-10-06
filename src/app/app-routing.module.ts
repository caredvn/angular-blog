import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'tv-shows',
    component:TvShowsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
