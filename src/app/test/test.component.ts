import { Component, OnInit, ViewChild } from '@angular/core';
import { Components } from '@one/web-components';

@Component({
  selector: 'app-test',
  template: `
    <owc-progress-spinner #progressSpinnerElement [diameter]="100" [value]="50" />
  `,
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  @ViewChild('progressSpinnerElement', { static: true })
  progressSpinnerElement: Components.OwcProgressSpinner;
}
