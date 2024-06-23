import { Route } from '@angular/router';
import * as fromContainer from './result/containers';
import { AppComponent } from './app.component';
export const allRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'results',
        component: fromContainer.ResultsContainerComponent,
      },
    ],
  },
];
