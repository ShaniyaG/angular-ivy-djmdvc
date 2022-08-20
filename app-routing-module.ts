import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
// import { CardComponent } from './src/app/card/card.component';
import { HomeComponent } from './src/app/home/home.component';
import { ThemeComponent } from './src/app/theme/theme.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'theme', component: ThemeComponent },
  // { path: 'card', component: CardComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
