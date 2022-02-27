import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstName:any;
  userName:any
  lastName:any
  data:any
  picture:any

constructor(protected readonly keycloak: KeycloakService){


}

ngOnInit() :void{
  this.getUserName();
}

  async getUserName(){
    this.data = await this.keycloak.loadUserProfile();
    this.userName=this.data.username;
    this.lastName=this.data.lastName;
    this.firstName = this.data.firstName;
   }

}
