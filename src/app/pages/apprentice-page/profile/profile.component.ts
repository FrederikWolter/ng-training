import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { FileUploader } from 'ng2-file-upload';
import { Components } from '@one/web-components';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
public uID!: number | undefined;
public uName!: string | undefined;
public uJob!: string | undefined;
public uRole!: string| undefined;
public uYear!: number| undefined;
  constructor(public userService: UsersService){
    this.uID = this.userService.activeUser?.id
    this.uName = this.userService.activeUser?.name
    this.uJob = this.userService.activeUser?.job
    this.uRole = this.userService.activeUser?.role
    this.uYear = this.userService.activeUser?.year
  }
uploader: FileUploader = new FileUploader({ url: "api/your_upload", removeAfterUpload: false, autoUpload: true });
}
