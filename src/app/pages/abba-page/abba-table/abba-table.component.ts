import { Component, OnInit, ViewChild} from '@angular/core';
import { Components } from '@one/web-components';
import { UsersService } from 'src/app/users.service';

import { Project, projectList } from '../../../project-info';




@Component({
  selector: 'app-abba-table',
  templateUrl: './abba-table.component.html',
  styleUrls: ['./abba-table.component.scss']
})
export class AbbaTableComponent implements OnInit {
  projectList = projectList;
  showForUser = "";

  @ViewChild('tableElement', { static: true }) tableElement!: Components.OwcTable;
  @ViewChild('buttonElement', { static: true }) buttonElement!: Components.OwcButton;
  constructor(private userService: UsersService) {
      this.showForUser = userService.activeUser?.name || "";
   }

  

  ngOnInit(): void {
  }

}




