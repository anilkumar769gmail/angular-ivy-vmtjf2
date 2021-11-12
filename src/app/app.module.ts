import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angula/common/http';
import { VehiclestockComponent } from './vehiclestock/vehiclestock.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpClientModule],
  declarations: [ AppComponent, VehiclestockComponent ],
  bootstrap:    [ AppComponent ],
  providers:[]
})
export class AppModule { }
