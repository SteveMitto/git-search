import { Injectable } from '@angular/core';
import { Repository } from '../repository';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryHttpService {

repos:Repository[]=[];
repos_url:[]=[];

  constructor(public http:HttpClient) { }

 getRep(username){
   let apiLink="https://api.github.com/users/"+username+"/repos"
  let promise =new Promise((resolve,reject)=>{
    this.http.get<[]>(apiLink).toPromise().then(
    (results)=>{
      this.repos=[];
      this.repos_url=[];
      for(let i =0;i<results.length;i++){
      // console.log(results)
      this.repos.push(results[i]["name"])
      this.repos_url.push(results[i]["url"])
    }
    console.log(this.repos)
    console.log(this.repos_url)

    },
    (error)=>{
      console.log("failed")
    })
  })
  return promise
  }
}
