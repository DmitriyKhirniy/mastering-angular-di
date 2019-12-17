import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionalExampleModule } from './optional-example/optional-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OptionalExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
