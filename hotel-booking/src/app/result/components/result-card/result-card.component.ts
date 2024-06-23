import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})
export class ResultCardComponent {
  _hotelInfo: any;
  @Input() set hotelInfo(hotelData: any) {
    this._hotelInfo = hotelData;
  }
}
