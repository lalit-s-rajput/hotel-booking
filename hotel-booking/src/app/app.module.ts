import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromComponents from './result/components';
import * as fromContainers from './result/containers';

@NgModule({
  declarations: [
    AppComponent,
    fromContainers.containers,
    fromComponents.components,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
