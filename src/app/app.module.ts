import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { MenuComponent } from './components/menu/menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { ShowsComponent } from './components/shows/shows.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { WatchListComponent } from './pages/watch-list/watch-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTitleComponent,
    MenuComponent,
    BannerComponent,
    CategoriesComponent,
    CategoryComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    TvShowsComponent,
    ShowsComponent,
    ShowCardComponent,
    MoviesComponent,
    WatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
