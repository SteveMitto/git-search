import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  search:string;

  @Output() findAccount = new EventEmitter<any>();

    sendName(){
      this.findAccount.emit(this.search)
      
    }
  constructor() { }

  ngOnInit() {
  }

}
