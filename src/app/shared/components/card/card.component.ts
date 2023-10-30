import { Component, Input, OnInit } from '@angular/core';
import { Visual } from 'src/app/models/interfaces/visual.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('item') visual: Visual;

  constructor() { }

  ngOnInit(): void {
  }

  setImage() {
    return `{'background-image': url(${this.visual.img})}`;
  }
}
