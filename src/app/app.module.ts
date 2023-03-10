import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { SubscriptionPlanComponent } from './components/subscription-plan/subscription-plan.component';

@NgModule({
  declarations: [AppComponent, CardComponent, ButtonComponent, SubscriptionPlanComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
