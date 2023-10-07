import { Component, OnInit, HostListener} from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  toggleIcon: string = '☰';
  openedMenu: boolean = false;
  showList: string = 'none'; 

  constructor(private menuService: MenuService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.checkScreenSize()
    this.updateService()
  }
  
  private checkScreenSize() {
    if (window.innerWidth >= 940) {
      this.openedMenu = true;
      this.showList = 'flex'
    } else {
      this.openedMenu = false;
    }
  }

  updateService() {
    const isPresent = this.openedMenu
    this.menuService.updateListPresence(isPresent)
  }

  toggleMenu() {
    this.openedMenu = !this.openedMenu;
    this.updateService()
    if (!this.openedMenu) {
      this.showList = 'none'
    } else {
      this.showList = 'flex'
    }
  }

  changeToggleButton() {
    if(!this.openedMenu) {
      this.toggleIcon = '☰';
    } else {
      this.toggleIcon = '✖';
    }
  }
}
