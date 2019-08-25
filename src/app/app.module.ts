import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GitComponent } from './git/git.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { RepoUrlComponent } from './repo-url/repo-url.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GitComponent,
    GitSearchComponent,
    RepoUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
