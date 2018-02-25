import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProjectsComponent } from './projects/projects.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path:'home', component: MainpageComponent},
  { path:'about', component: AboutComponent},
  { path:'projects', component: ProjectsComponent}, 
  { path:'gallery', component: GalleryComponent}, 
  { path:'contact', component: ContactComponent},
  { path: '',redirectTo: '/home',pathMatch: 'full'},
]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    ContactComponent,
    MainpageComponent,
    ProjectsComponent,
    GalleryComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    Ng2CarouselamosModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
