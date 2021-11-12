import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VehiclestockComponent } from "./vehiclestock/vehiclestock.component";


const routes: Routes =[
{path: "vehiclestocks", component: VehiclestockComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes,{ relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
