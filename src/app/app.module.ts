import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from '../../app-routing-module';
import { HomeComponent } from './home/home.component';
// import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { ThemeComponent } from './theme/theme.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    // CardComponent,
    ThemeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [UserService],
})
export class AppModule {}
