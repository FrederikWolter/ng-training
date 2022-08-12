import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { Project, projectList } from '../../../project-info';
import { Components } from '@one/web-components';

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

  project: Project = {
    id: 0,
    name: "",
    description: "",
    abba: "",
    job_group: undefined,
    status: undefined,
    year: 0
  };

  constructor(private route:Router) { }

  ngOnInit() {
  }

  open(){
    console.log("Openned")
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
      this.project.abba = 'Kevin Latusinski';
      projectList.push(this.project);
      this.close();
    }
  }

}
