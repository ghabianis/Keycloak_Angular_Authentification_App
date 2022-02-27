import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public userObject: any
  public token: any
  public refreshToken: any
  firstName:any;
  userName:any
  lastName:any
  data:any
  picture:any
  fullName: any
  constructor(protected readonly keycloak: KeycloakService) { }

 ngOnInit(): void {
 this.getUserName();
   }

   logout() {
    return this.keycloak.logout("http://localhost:4200/logout")

  }

   async getUserName(){
     this.data = await this.keycloak.loadUserProfile();
     this.userName=this.data.username;
     this.lastName=this.data.lastName;
     this.firstName = this.data.firstName;
     this.fullName = this.lastName +' '+ this.firstName;

    }
    async update() {
      await this.keycloak.updateToken(-1).then(async () => {
        this.token = await this.keycloak.getToken()
      })
      this.refreshToken = this.keycloak.getKeycloakInstance().refreshToken
    }

}
