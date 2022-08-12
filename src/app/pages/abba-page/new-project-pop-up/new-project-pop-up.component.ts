import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-project-pop-up',
  templateUrl: './new-project-pop-up.component.html',
  styleUrls: ['./new-project-pop-up.component.css']
})
export class NewProjectPopUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

document.getElementById('button').addEventListener('click', function()
{
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function()
{
  document.querySelector('.bg-modal').style.display = 'none';
});
