import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AppComponent } from './app.component';

const routes: Routes = [


	{
		path: 'app',
		component: AppComponent
	},
	{
		path: 'experience',
		component: ExperienceComponent
	},
	{
		path: 'skills',
		component: SkillsComponent
	},
	{
		path: 'technologies',
		component: TechnologiesComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
