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
  // Whether this should be visible or not
  visible = true;
  // Error warning for unfilled inputs
  nameError = false;
  descriptionError = false;
  yearError = false;
  // List of all avalable job groups for the dropdown input
  jobGroupList = jobGroupList;
  // Empty project
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
    // Set abba field as profile name
    this.project.abba = this.userService.activeUser?.name || "Kein Abba gesetzt";
  }

  ngOnInit() {
  }

  select(e: CustomEvent): void {
    // Get selected job group from dropdown
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

  /**
   * Checks for right submission. 
   * If one or more fields are empty the submission wont work and the fields 
   * will go into error mode
   * 
   * If all fields are filled the created project will be stored in the global 
   * projectList
   */
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
      projectList.push(this.project);
      this.close();
    }
  }

}
