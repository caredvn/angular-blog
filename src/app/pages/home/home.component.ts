import { Component, HostListener, OnInit } from '@angular/core';
import { MenuService } from '../../components/menu/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listIsPresent: boolean;
  openedBg = 'transparent'

  constructor(public menuService: MenuService) {
    this.listIsPresent = this.menuService.listIsPresent
  }

  updadeHeaderBg() {
    if(this.menuService.listIsPresent) {
      this.openedBg = '#1D1D1D'
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
      this.openedBg = '#1D1D1D';
    } else {
      this.openedBg = 'transparent';
    }
  }

  ngOnInit(): void {
  }

}
