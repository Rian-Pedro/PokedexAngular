import { Component, Input, OnInit} from '@angular/core';
import { Info } from 'src/app/Info';

@Component({
  selector: 'app-box-info',
  templateUrl: './box-info.component.html',
  styleUrls: ['./box-info.component.css']
})
export class BoxInfoComponent {
  @Input() text: String = '';
  @Input() content: any;
  @Input() types: any;
  @Input() habs: any;
  @Input() ultimo: Boolean = false;

  ngOnInit(): void {
  }
}
