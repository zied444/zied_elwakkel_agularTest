import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {

  provideClientHydration,
} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListresComponent } from './listres/listres.component';
import { AddresComponent } from './addres/addres.component';
import { UpdateresComponent } from './updateres/updateres.component';
import { DetailsResComponent } from './details-res/details-res.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListresComponent,
    AddresComponent,
    UpdateresComponent,
    DetailsResComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
