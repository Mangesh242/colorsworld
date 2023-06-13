import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardqComponent } from './cardq/cardq.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MainComponent } from './main/main.component';
import { TimerComponent } from './timer/timer.component';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    CardqComponent,
    ToolbarComponent,
    MainComponent,
    TimerComponent,
    ResultDialogComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatRadioModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgFor,
    MatDialogModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
