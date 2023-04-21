import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/Pokemon';

import * as $ from "jquery";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() nome: string = '';
  @Input() sprite: string = '';
  @Input() id: number = 0;
  @Input() typesName: Array<any> = [];

}
