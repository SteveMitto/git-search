import { Injectable } from '@angular/core';
import { Repository } from '../repository';
import { RepoUrl } from '../repo-url'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryHttpService {

  repos: Repository[] = [];
  repos_url: RepoUrl[] = [];

  constructor(public http: HttpClient) { }

  getRepository(username) {
    let apiLink = "https://api.github.com/users/" + username + "/repos?access_token=791be29779bf4a2cdbf5d1e086899bdf760b748b"
    let promise = new Promise((resolve, reject) => {
      this.http.get<[]>(apiLink).toPromise().then(
        (results) => {
          this.repos = [];
          this.repos_url = [];
            for (let i = 0; i < results.length; i++) {
              // console.log(results)
              this.repos.push(results[i]["name"])
              this.repos_url.push(results[i]["url"])
            }
          // console.log(this.repos)
          // console.log(this.repos_url)
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
