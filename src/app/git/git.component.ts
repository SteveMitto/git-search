import { Component, OnInit } from '@angular/core';
import { AccountHttpService } from '../service/account-http.service';
import { Account} from '../account';
import { Repository } from '../repository'
@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
  users:Account;
  user
  constructor(private accountService:AccountHttpService) { }
  // console.log(user)


  sendName(search){
    this.accountService.searchName(search).then(
      (results)=>{
      this.users= this.accountService.user
      console.log(this.users)
      },
      (error)=>{
        console.log('error')
      }
    );
  }

  ngOnInit() {
    this.sendName("SteveMitto")
  }

}
