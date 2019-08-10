import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './theming/header/header.component';
import { LogoComponent } from './utils/logo/logo.component';
import { HomeComponent } from './scenes/home/home.component';
import { SampleUsecaseComponent } from './utils/sample-usecase/sample-usecase.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    HomeComponent,
    SampleUsecaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
