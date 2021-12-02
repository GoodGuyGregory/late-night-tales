import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Holds all components needed for PrimeNg
import { PrimengModule } from './modules/primeng/primeng.module';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FormsModule } from '@angular/forms';
import { CardViewComponent } from './components/body/card-view/card-view.component';
import { ListViewComponent } from './components/body/list-view/list-view.component';
import { ReleaseCalendarComponent } from './components/body/release-calendar/release-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CardViewComponent,
    ListViewComponent,
    ReleaseCalendarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    PrimengModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
