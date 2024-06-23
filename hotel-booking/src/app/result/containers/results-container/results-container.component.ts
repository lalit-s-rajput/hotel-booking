import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-results-container',
  templateUrl: './results-container.component.html',
  styleUrls: ['./results-container.component.scss'],
})
export class ResultsContainerComponent implements OnInit {
  hotelResultsData$: any;
  constructor(private service: ResultsService) {}
  ngOnInit(): void {
    this.hotelResultsData$ = this.service.getResults();
  }
}
