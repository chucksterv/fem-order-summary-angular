import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string;
  @Input() primary: string;
  isPrimary: boolean;

  constructor() {
    this.text = 'Default Text';
    this.primary = 'true';
    this.isPrimary = true;
  }

  ngOnInit() {
    this.primary === 'true'
      ? (this.isPrimary = true)
      : (this.isPrimary = false);
  }
}
