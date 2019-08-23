import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Account } from '../account';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AccountHttpService {
  user:Account;
  constructor(private http:HttpClient) { }

  searchName(search){
    interface ApiResponse{
      avatar_url:string;
      login:string;
      public_repos:string;
      repos_url:string;
      followers:string;
      following:string;
    }
    let apiUrl="https:api.github.com/users/"+search+"?access_token="+environment.APIKEY;

    let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(apiUrl).toPromise().then(
        (results)=>{
          this.user =new Account(results.login,results.avatar_url,results.public_repos,results.repos_url,results.followers,results.following)
          console.log(this.user)
          // this.user.name=results.name
          resolve()
        },
        (error)=>{
            console.log('error')
          reject()
        })
    })
    return promise
  }
}
