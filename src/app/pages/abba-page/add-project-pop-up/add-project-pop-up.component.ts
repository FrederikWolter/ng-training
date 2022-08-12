import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { jobGroupList, Project, projectList } from '../../../project-info';
import { Components } from '@one/web-components';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-add-project-pop-up',
  templateUrl: './add-project-pop-up.component.html',
  styleUrls: ['./add-project-pop-up.component.scss']
})
export class AddProjectPopUpComponent implements OnInit {
  visible = true;
  nameError = false;
  descriptionError = false;
  yearError = false;

  @ViewChild('selectDropdownElement', { static: true }) selectDropdownElement!: Components.OwcSelectDropdown;
  jobGroupList = jobGroupList;
  project: Project = {
    id: 0,
    name: "",
    description: "",
    abba: "",
    job_group: undefined,
    status: undefined,
    year: 0
  };

  constructor(private userService: UsersService) { 
    this.project.abba = this.userService.activeUser?.name || "Kein Abba gesetzt";
  }

  ngOnInit() {
  }

  select(e: CustomEvent): void {
    this.project.job_group = jobGroupList[e.detail[0]];
  }

  close(){
    this.visible = false;
    this.project = {
      id: 0,
      name: "",
      description: "",
      abba: "",
      job_group: undefined,
      status: undefined,
      year: 0
    }
  }

  submit(){
    if(!this.project.name){
      this.nameError = true;
    }
    if(!this.project.year){
      this.yearError = true;
    }
    if(!this.project.description){
      this.descriptionError = true;
    }

    if(!(this.nameError || this.yearError || this.descriptionError)){
      this.project.status = 'offen';
      console.log(this.project)
      projectList.push(this.project);
      this.close();
    }
  }

}
