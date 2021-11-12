import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiclestock',
  templateUrl: './vehiclestock.component.html',
  styleUrls: ['./vehiclestock.component.css']
})
export class VehiclestockComponent implements OnInit {
  
vehiclestock: Vehiclestock[] =[];
  constructor() { }

  ngOnInit() {
  }

}