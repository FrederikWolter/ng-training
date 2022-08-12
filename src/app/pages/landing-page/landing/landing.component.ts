import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  username!: string;
  userpassword!: string;

  constructor(public userService:UsersService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.signIn(this.username, this.userpassword);
    console.log(this.userService.activeUser);
  }

}
