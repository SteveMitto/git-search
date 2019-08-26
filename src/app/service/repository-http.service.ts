import { Injectable } from '@angular/core';
import { Repository } from '../repository';
import { RepoUrl } from '../repo-url'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RepositoryHttpService {

  repos: Repository[] = [];
  repos_url: RepoUrl[] = [];

  constructor(public http: HttpClient) { }

  getRepository(username) {
    let apiLink = "https://api.github.com/users/" + username + "/repos?access_token="+environment.APIKEY
    let promise = new Promise((resolve, reject) => {
      this.http.get<[]>(apiLink).toPromise().then(
        (results) => {
          this.repos = [];
          this.repos_url = [];
            for (let i = 0; i < results.length; i++) {
              this.repos.push(results[i]["name"])
              this.repos_url.push(results[i]["url"])
            }
          resolve()
        },
        (error) => {
          console.log("failed")
          reject(error)
        })
    })
    return promise
  }
}
