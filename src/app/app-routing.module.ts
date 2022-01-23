import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: "", pathMatch:'full', redirectTo:'/home' },
  {path: "home", component:AboutComponent, data: { state: 'home' }},
  {path: "education", component:EducationComponent, data: { state: 'education' }},
  {path: "portfolio", component:PortfolioComponent, data: { state: 'portfolio' }},
  {path: "resume", component:ResumeComponent, data: { state: 'resume' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
