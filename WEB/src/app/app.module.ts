import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PlayerComponent } from './player/player.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyProfileEditComponent } from './my-profile/my-profile-edit/my-profile-edit.component';
import { MyProfileInfoComponent } from './my-profile/my-profile-info/my-profile-info.component';
import { MyProfileSongsComponent } from './my-profile/my-profile-songs/my-profile-songs.component';
import { MyProfilePodcastsComponent } from './my-profile/my-profile-podcasts/my-profile-podcasts.component';

import { ProfileComponent } from './profile/profile.component';
import { ProfileInfoComponent } from './profile/profile-info/profile-info.component';
import { ProfileSongsComponent } from './profile/profile-songs/profile-songs.component';
import { ProfilePodcastsComponent } from './profile/profile-podcasts/profile-podcasts.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, HomeComponent, RegisterComponent, MyProfileComponent, PlayerComponent, MusicPlayerComponent, ProfileComponent, MyProfileEditComponent, MyProfileInfoComponent, MyProfileSongsComponent, MyProfilePodcastsComponent, ProfileInfoComponent, ProfileSongsComponent, ProfilePodcastsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
}
