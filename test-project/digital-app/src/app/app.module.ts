import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioModule } from './components/portfolio/portfolio.module';
import { ViewWorkComponent } from './components/view-work/view-work.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ViewWorkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: PortfolioComponent},
      {path: 'view/:id', component: ViewWorkComponent},
    ]),
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    PortfolioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
