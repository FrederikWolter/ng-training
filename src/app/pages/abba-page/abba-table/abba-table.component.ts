import { Component, OnInit } from '@angular/core';

import { Project, projectList } from '../abba-project';

@Component({
  selector: 'app-abba-table',
  templateUrl: './abba-table.component.html',
  styleUrls: ['./abba-table.component.scss']
})
export class AbbaTableComponent implements OnInit {
  projectList: Project[] = projectList;


  constructor() { }

  ngOnInit(): void {
  }

}
