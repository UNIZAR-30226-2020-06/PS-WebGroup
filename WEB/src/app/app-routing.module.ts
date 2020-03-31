import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MusicPlayerComponent } from './music-player/music-player.component'
import { HomeComponent } from './home/home.component';

import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProfileEditComponent } from './my-profile/my-profile-edit/my-profile-edit.component';
import { MyProfileInfoComponent } from './my-profile/my-profile-info/my-profile-info.component';
import { MyProfileSongsComponent } from './my-profile/my-profile-songs/my-profile-songs.component';
import { MyProfilePodcastsComponent } from './my-profile/my-profile-podcasts/my-profile-podcasts.component';
import { MyProfileUpload1Component } from './my-profile/my-profile-upload1/my-profile-upload1.component';
import { MyProfileUpload2Component } from './my-profile/my-profile-upload2/my-profile-upload2.component';

import { RegisterComponent } from './register/register.component'

import { ProfileInfoComponent } from './profile/profile-info/profile-info.component';
import { ProfileSongsComponent } from './profile/profile-songs/profile-songs.component';
import { ProfilePodcastsComponent } from './profile/profile-podcasts/profile-podcasts.component';


const appRoutes: Routes = [
    {path: 'Register', component: RegisterComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'SuccesfulLogin', component: MusicPlayerComponent},
    {path: 'MyProfile/:id/Edit', component: MyProfileEditComponent},
    {path: 'MyProfile/AddSong1', component: MyProfileUpload1Component},
    {path: 'MyProfile/AddSong2', component: MyProfileUpload2Component},
    {path: 'MyProfile/:id', component: MyProfileComponent},
    {path: 'MyProfile/:id/Info', component: MyProfileInfoComponent},
    {path: 'MyProfile/:id/MySongs', component: MyProfileSongsComponent},
    {path: 'MyProfile/:id/MyPodCasts', component: MyProfilePodcastsComponent},
    {path: 'Profile/:id/Info', component: ProfileInfoComponent},
    {path: 'Profile/:id/Songs', component: ProfileSongsComponent},
    {path: 'Profile/:id/Podcasts', component: ProfilePodcastsComponent},
    {path: '', component: HomeComponent},
    {path: '**', redirectTo: ''},    
]

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }