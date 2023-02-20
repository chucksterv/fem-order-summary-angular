import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.scss'],
})
export class SubscriptionPlanComponent {
  @Input() annualPrice: string;

  constructor() {
    this.annualPrice = 'default price';
  }
}
