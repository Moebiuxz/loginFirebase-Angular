import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {RegisterPageComponent} from './components/register-page/register-page.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {PrivatePageComponent} from './components/private-page/private-page.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthGuardLoggedService} from './services/auth-guard-logged.service';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGuardLoggedService] },
  { path: 'register', component: RegisterPageComponent, canActivate: [AuthGuardLoggedService] },
  { path: 'notfound', component: NotFoundPageComponent },
  { path: 'private', component: PrivatePageComponent, canActivate: [AuthGuardService] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
