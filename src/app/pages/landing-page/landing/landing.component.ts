import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
// Anzeigen Definition
export class LandingComponent implements OnInit {

  username!: string;
  userpassword!: string;

  loginError: boolean = false;

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
  }

  // Logik für rote Schrift bei falschen LogIn Daten
  onSubmit() {

    if(this.userService.signIn(this.username, this.userpassword)){
      this.loginError = false;
      console.log("Login successful");
    } else {
      this.loginError = true;
      console.log("Login failed");
    }
    
    console.log(this.userService.activeUser);
  }

}
