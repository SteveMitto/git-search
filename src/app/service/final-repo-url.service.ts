import { Injectable } from '@angular/core';
import { FinalRepoUrl } from '../final-repo-url'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FinalRepoUrlService {

repoLink:FinalRepoUrl[]=[];
  constructor(private http:HttpClient) { }

  getLink(username){
    let repoLink = "https://api.github.com/users/"+username+"/repos"
    let promise = new Promise((resolve,reject)=>{
      this.http.get<[]>(repoLink).toPromise().then(
        (results)=>{
          this.repoLink=[];
          // console.log(results.length);
          for(let i = 0;i<results.length;i++){
            this.repoLink.push(results[i]["html_url"]);
            console.log(results[i]["html_url"]);
          }
          // console.log(results);
          (resolve)
        },
        (error)=>{
          console.log('error');
        })
    })
    return promise;
  }
}
