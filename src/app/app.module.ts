import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { HomeSectionComponent } from './Components/home-section/home-section.component';
import {ButtonModule} from 'primeng/button';
import {StyleClassModule} from 'primeng/styleclass';
import {CardModule} from 'primeng/card';
import { ProjectCardComponent } from './Components/project-card/project-card.component';
import {CarouselModule} from 'primeng/carousel';
import { CarouselProjectsComponent } from './Components/carousel-projects/carousel-projects.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    HomeSectionComponent,
    ProjectCardComponent,
    CarouselProjectsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    ButtonModule,
    StyleClassModule,
    CardModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
