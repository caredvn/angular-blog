import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {
  @Input()
  showCardImg: string = "";
  @Input()
  showCardTitle: string = "";
  @Input()
  showCardRate: string = "";
  @Input()
  showCardYear: string = "";
  @Input()
  ShowCardId: string = ""
  @Input()
  showCardAlt: string = ""


  constructor() { }

  ngOnInit(): void {
  }

}
