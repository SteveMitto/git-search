import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  search:string;

  @Output() findAccount = new EventEmitter<any>();
  @Output() repoRes = new EventEmitter<any>();
  @Output() name = new EventEmitter<any>();
  getLink(){
    this.name.emit(this.search)
  }
  getRepo(){
    this.repoRes.emit(this.search)
  }
    sendName(){
      this.findAccount.emit(this.search);
      this.getRepo();
      this.getLink();
    }
  constructor() { }

  ngOnInit() {
  }

}
