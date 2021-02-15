import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPartComponent } from './components/left-part/left-part.component';
import { RightPartComponent } from './components/right-part/right-part.component';
import { BottomComponent } from './components/bottom/bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPartComponent,
    RightPartComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
