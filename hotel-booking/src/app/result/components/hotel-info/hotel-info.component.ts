import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.scss'],
})
export class HotelInfoComponent {
  _hotelData: any;
  @Input() set hotelInfo(hotelData: any) {
    this._hotelData = hotelData;
  }
}
