import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { TemplatesComponent } from './templates/templates.component';
import { TeamComponent } from './team/team.component';
import { IndividualComponent } from './individual/individual.component';
import { ContactComponent } from './contact/contact.component';
import { TehnologyComponent } from './tehnology/tehnology.component';

const routes: Routes = [

  {path:'', pathMatch: 'full', component:HomeComponent},
  {path:'category', component:CategoryComponent},
  {path:'templates/:category', component:TemplatesComponent},
  {path:'team', component:TeamComponent},
  {path:'custom', component:IndividualComponent},
  {path:'contact', component:ContactComponent},
  {path:'tehnology', component:TehnologyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
