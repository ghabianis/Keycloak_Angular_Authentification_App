import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] ,data:{'admin':'user'}},
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
  { path: 'logout', component: LogoutComponent,canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
