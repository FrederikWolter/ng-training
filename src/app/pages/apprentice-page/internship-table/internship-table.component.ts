import { Component, ViewChild } from '@angular/core';
import { Components } from '@one/web-components';
import { Project, projectList } from 'src/app/project-info';

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
  projectlist = projectList

  onChange(event:any){
    if(event.detail === ""){
      this.filteredPp = this.projectlist
    }else{
      this.filteredPp = this.projectlist.filter(
        s => s.name.toLowerCase().includes(this.value.toLowerCase())
      );
    }
  }

  filteredPp: Project[] = [];
  constructor(){
    this.filteredPp = this.projectlist;
  }
}
