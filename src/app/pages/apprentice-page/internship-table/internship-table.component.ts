import { Component, ViewChild } from '@angular/core';
import { Components } from '@one/web-components'

@Component({
  selector: 'app-internship-table',
  templateUrl: './internship-table.component.html',
  styleUrls: ['./internship-table.component.scss']
})
export class InternshipTableComponent {
  @ViewChild('tableElement', { static: true }) tableElement!: Components.OwcTable;
  @ViewChild('buttonElement', { static: true }) buttonElement!: Components.OwcButton;
  @ViewChild('inputElement', { static: true }) inputElement!: Components.OwcInput;
  @ViewChild('selectDropdownElement', { static: true }) selectDropdownElement!: Components.OwcSelectDropdown;

  value!: string;
}
