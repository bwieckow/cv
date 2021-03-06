import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PanelComponent } from './panel/panel.component';
import { CvComponent } from './cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    FooterComponent,
    SideMenuComponent,
    PanelComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'cv', component: CvComponent },
      { path: 'posts', component: PostComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
