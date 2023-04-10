import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PartOfTheDayPipe } from 'src/utils/part-of-the-day.pipe';
import { MinutesClassDirective } from 'src/utils/minutes-class.directive';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PartOfTheDayPipe,
    MinutesClassDirective,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
