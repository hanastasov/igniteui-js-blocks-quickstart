import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, provideRoutes } from '@angular/router';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { IgxGridModule, IgxIconModule, IgxCalendarModule } from 'igniteui-js-blocks/main';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    IgxCalendarModule,
    IgxIconModule,
    IgxGridModule,
    FormsModule,
      RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'list',
        component: ListComponent
      }],
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    CalendarComponent,
  ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
