import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ToolbarComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
