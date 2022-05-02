import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {VideoPageComponent} from './video-page/video-page.component';
import {VideosComponent} from './videos/videos.component';
import {AboutComponent} from "./about/about.component";
import {ContactsComponent} from "./contacts/contacts.component";

const routes: Routes = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component: HomeComponent},
    {path: 'video/:id', component: VideoPageComponent},
    {path: 'videos', component: VideosComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contacts', component: ContactsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
