import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { UserComponent } from './user/user.component';
import { DescriptionPipe } from './description-pipe';
import { OnlyPlantsComponent } from './only-plants/only-plants.component';
import { OnlySeedsComponent } from './only-seeds/only-seeds.component';
import { UpcomingVarietiesComponent } from './upcoming-varieties/upcoming-varieties.component';
import { PlanterDetailsComponent } from './planter-details/planter-details.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TdfplanterComponent } from './tdfplanter/tdfplanter.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

const allLinks:Routes = [
  {path:'launchplanter',component:AdminWorkComponent},
  {path:'planters',component:UserComponent},
  {path:'upcomingplanters',component:UpcomingVarietiesComponent},
  {path:'onlyPlants',component:OnlyPlantsComponent},
  {path:'onlySeeds',component:OnlySeedsComponent},
  {path:'planterDetail/:pid',component:PlanterDetailsComponent}
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminWorkComponent,
    UserComponent,
    DescriptionPipe,
    OnlyPlantsComponent,
    OnlySeedsComponent,
    UpcomingVarietiesComponent,
    PlanterDetailsComponent,
    TdfplanterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(allLinks),FormsModule,
    CommonModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }