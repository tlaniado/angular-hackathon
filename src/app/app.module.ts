import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

import { HomeSlidesModule } from './home-slides/home-slides.module';
import { SignUpModule } from './sign-up/sign-up.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { VolunteerNowComponent } from './components/volunteer-now/volunteer-now.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { OrganizationFormComponent } from './components/organization-form/organization-form.component';
import { ContectUsComponent } from './components/contect-us/contect-us.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavMenuComponent,
    VolunteerNowComponent,
    ProfilesComponent,
    OrganizationFormComponent,
    ContectUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HomeSlidesModule,
    SignUpModule,
    RouterModule
  ],
  providers: [
    AuthService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
