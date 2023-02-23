import { Component } from '@angular/core';
import { Planter } from '../planter';
import { PlanteroperationService } from '../planteroperation.service';

@Component({
  selector: 'app-tdfplanter',
  templateUrl: './tdfplanter.component.html',
  styleUrls: ['./tdfplanter.component.css']
})
export class TdfplanterComponent {
  __planterService:PlanteroperationService;
  p:Planter = new Planter(0,'rosePlant',0,'plant','winter','rosePlant.jpg','toPlantSeed',0,0,0);
  
  constructor(planterService:PlanteroperationService)
  {
    this.__planterService = planterService;
  }

  doFormSubmit()
  {
    console.log("form submit button clicked ")
    console.log(this.p);
    
  }

}
