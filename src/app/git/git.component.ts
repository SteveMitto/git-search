import { Component, OnInit } from '@angular/core';
import { AccountHttpService } from '../service/account-http.service';
import { RepositoryHttpService } from '../service/repository-http.service';
import { FinalRepoUrlService } from '../service/final-repo-url.service';
import { FinalRepoUrl } from '../final-repo-url';
import { Account} from '../account';
import { Repository } from '../repository'
import { RepoUrl } from '../repo-url'

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
  users:Account;
  repos:Repository[]=[];
  repos_url:RepoUrl[]=[];
  repoLink:FinalRepoUrl[]=[];
  showRepo:boolean= true;
  constructor(private accountService:AccountHttpService,private repoService:RepositoryHttpService ,private repLink:FinalRepoUrlService) { }
  // console.log(user)

  displayRepo(){
    this.showRepo == !this.showRepo
  }
  getLink(username){
    this.repLink.getLink(username).then(
      (results)=>{
        this.repoLink = this.repLink.repoLink
        console.log(this.repoLink)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  getRepository(search){
    this.repoService.getRepository(search).then(
      (results)=>{
        this.repos = this.repoService.repos
        this.repos_url = this.repoService.repos_url
        console.log(this.repos_url)
      // this.getLink(search)
      },
      (error)=>{
        console.log("could not fetch repo");
      }
    )
  }

  sendName(search){
    this.accountService.searchName(search).then(
      (results)=>{
      this.users= this.accountService.user
      // this.getRepository(this.users.name)
      console.log(this.users)
      },
      (error)=>{
        console.log('error')
      }
    );
  }

  ngOnInit() {
    this.sendName("SteveMitto")
    this.getRepository("SteveMitto")
    this.getLink("SteveMitto")
    // console.log(users)
    // console.log(repos)

  }

}
