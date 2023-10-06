import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MenuService } from '../../components/menu/menu.service';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  listIsPresent: boolean;
  openedBg = 'transparent'
  streamingList: any[] = []
  newStreamingList: string[] = []


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
    this.streamingList = this.getType()

    this.streamingList.forEach((item) => {
      if(!this.newStreamingList.includes(item.streaming)) {
        this.newStreamingList.push(item.streaming)
      }
    })
    this.streamingList = this.newStreamingList
  }
  
  getType(): string[] {
    const result: string[] = dataFake.filter((item: any) => item.type === 'tv-show')
    return result
  }
}
