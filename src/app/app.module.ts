import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {NgsRevealModule} from 'ngx-scrollreveal';

import {AppComponent} from './app.component';
import {VideoCardComponent} from './video-card/video-card.component';
import {VideoPageComponent} from './video-page/video-page.component';
import {HomeComponent} from './home/home.component';
import {CommentsComponent} from './comments/comments.component';
import {VideosComponent} from './videos/videos.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoCardComponent,
    VideoPageComponent,
    HomeComponent,
    CommentsComponent,
    VideosComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgsRevealModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
