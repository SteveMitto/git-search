import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  sendName(search){
    console.log(search)
  }
  constructor() { }

  ngOnInit() {
  }

}
