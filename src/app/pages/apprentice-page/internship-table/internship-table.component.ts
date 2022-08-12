import { Component, ViewChild } from '@angular/core';
import { Components } from '@one/web-components';
import { Project, projectList } from 'src/app/project-info';

@Component({
  selector: 'app-internship-table',
  templateUrl: './internship-table.component.html',
  styleUrls: ['./internship-table.component.scss']
})
export class InternshipTableComponent {

  value!: string;
  projectList = projectList
  filteredProjects: Project[] = [];

  onChange(event: any) {
    // search empty?
    if (event.detail === "") {
      this.filteredProjects = this.projectList  // take all projects
    } else {
      this.filteredProjects = this.projectList.filter(
        project => project.name.toLowerCase().includes(this.value.toLowerCase())  // filter projects
      );
    }
  }

  constructor() {
    this.filteredProjects = this.projectList;
  }
}
