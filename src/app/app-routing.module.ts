import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CanActive1Guard, CanDeactive1Guard } from './can-active1.guard';
import { ContectComponent } from './contect/contect.component';
import { HomeComponent } from './home/home.component';
import { XPageComponent } from './x-page/x-page.component';

const routes: Routes = [
  { path:'', component:HomeComponent,
//canActivate: [CanActive1Guard]
},
  { path:'home', component:HomeComponent,
  //canActivate: [CanActive1Guard]
},
  { path:'contectme', component:ContectComponent},
  { path:'aboutme', component:AboutComponent,
  //canDeactivate:[CanDeactive1Guard]
},
  { path:'x-page', component:XPageComponent,
 // canDeactivate:[CanDeactive1Guard]
},
{ 
  path:"blog",
loadChildren: () => import('./blog/blog.module').then( m => m.BlogModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }   
