import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  @Input()
  showsTitle: string = ""

  showCardId: string = ""
  showCardList: any[] = []
  
  
  constructor() {}
  
  ngOnInit(): void {
    this.showCardList = this.getComponentList()
  }

  getComponentList(): any  {
    const list = dataFake.filter((item: { streaming: string }) => item.streaming === this.showsTitle)
    return list
  }
}


