import { Component, ViewChild } from '@angular/core';
import { Components } from '@one/web-components';

@Component({
  selector: 'app-internship-table',
  templateUrl: './internship-table.component.html',
  styleUrls: ['./internship-table.component.scss']
})

export class InternshipTableComponent{  
  @ViewChild('tableElement', { static: true }) tableElement!: Components.OwcTable;
  @ViewChild('buttonElement', { static: true }) buttonElement!: Components.OwcButton;
  @ViewChild('inputElement', { static: true }) inputElement!: Components.OwcInput;
  @ViewChild('selectDropdownElement', { static: true }) selectDropdownElement!: Components.OwcSelectDropdown;

  value!: string;

  onChange(event:any){
    if(event.detail === ""){
      this.filteredPp = this.praxisphasen
    }else{
      this.filteredPp = this.praxisphasen.filter(
        s => s.thema.toLowerCase().includes(this.value.toLowerCase())
      );
    }
    console.log(event.detail)
    console.log(event.target.value)
  }

  filteredPp: praxisphase[] = [];
  praxisphasen: praxisphase[] = [{ thema: 'Alice', ansprechpartner: 'HE', beruf: 'AI'}, { thema: 'Bob', ansprechpartner: 'EM', beruf: 'AI' }];
  constructor(){
    this.filteredPp = this.praxisphasen;
  }
}

export class praxisphase {
  constructor(){}
  public thema!: string;
  public ansprechpartner!: string;
  public beruf!: string;
}
