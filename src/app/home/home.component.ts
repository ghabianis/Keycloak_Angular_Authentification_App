import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userObject: any
  public token: any
  public refreshToken: any
  firstName:any;
  userName:any
  lastName:any
  data:any

  loggedOut = false
  constructor(protected readonly keycloak: KeycloakService,private dataServices:DataService) {

  }
  async ngOnInit(): Promise<void> {
    this.userObject = await this.keycloak.loadUserProfile();
    this.token = await this.keycloak.getToken()
    this.refreshToken = this.keycloak.getKeycloakInstance().refreshToken
  }

  logout() {
    this.keycloak.logout("http://localhost:4200/logout")
  }
   loggedOutFN(){
     if(!this.keycloak.isLoggedIn){
       this.loggedOut= true
     }
   }


  async update() {
    await this.keycloak.updateToken(-1).then(async () => {
      this.token = await this.keycloak.getToken()
    })
    this.refreshToken = this.keycloak.getKeycloakInstance().refreshToken
  }


}
