import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  firstName:any;
  userName:any
  lastName:any
  data:any
  picture:any
  fullName:any
  token:any
  constructor(protected readonly keycloak: KeycloakService,private router: Router) { }

  ngOnInit(): void {
   this.getUserName();
  }
  logout() {
    this.keycloak.logout("http://localhost:4200/logout")
  }

  async getUserName(){
    this.data = await this.keycloak.loadUserProfile();
    this.userName=this.data.username;
    this.lastName=this.data.lastName;
    this.firstName = this.data.firstName;
    this.fullName = this.lastName +' '+ this.firstName;
    this.picture = this.keycloak.loadUserProfile();
    console.log(this.picture)
   }


}
