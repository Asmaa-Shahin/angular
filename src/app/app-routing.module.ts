import { MovieDetailsComponent } from './movie-details/movie-details.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PepoleComponent } from './pepole/pepole.component';
import { TvComponent } from './tv/tv.component';
import { NetworkComponent } from './network/network.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
{path:'home', canActivate:[AuthGuard] ,component:HomeComponent},
{path:'about',canActivate:[AuthGuard] ,component:AboutComponent},
{path:'movies',canActivate:[AuthGuard] ,component:MoviesComponent},
{path:'network',canActivate:[AuthGuard] ,component:NetworkComponent},
{path:'tv',canActivate:[AuthGuard] ,component:TvComponent},
{path:'pepole',canActivate:[AuthGuard] ,component:PepoleComponent},
{path:'movieDetatils/:id',canActivate:[AuthGuard] ,component:MovieDetailsComponent},

{path:'register' ,component:RegisterComponent},
{path:'login',component:LoginComponent},
{
  path: 'settings',
  loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
},

{path:'**',component:NotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
