import { Component, Input, OnInit } from '@angular/core';
import { Visual } from 'src/app/models/interfaces/visual.interface';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  @Input() items: Visual[] | null;

  constructor() { }

  ngOnInit(): void {
  }

}
