import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// carbon-components-angular default imports
import { IconModule, IconService, ThemeModule, UIShellModule, AccordionModule, 
	     ButtonModule, CheckboxModule, ComboBoxModule,ContainedListModule,
		   ContentSwitcherModule,ContextMenuModule,DatePickerModule,
		   DialogModule,DropdownModule,FileUploaderModule,GridModule,
		   NotificationModule,NumberModule,SearchModule,SliderModule,
		   StructuredListModule
		 } from 'carbon-components-angular';
		 
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { TechnologiesComponent } from './technologies/technologies.component';



@NgModule({
	declarations: [
		AppComponent,
  ExperienceComponent,
  SkillsComponent,
  TechnologiesComponent
		
	],
	imports: [
		BrowserModule,BrowserAnimationsModule,
		FormsModule,AppRoutingModule,
		UIShellModule,IconModule,
		ThemeModule,AccordionModule,
		ButtonModule,CheckboxModule,
		ComboBoxModule,ContainedListModule,
		ContentSwitcherModule,ContextMenuModule,
		DatePickerModule,DialogModule,
		DropdownModule,FileUploaderModule,
		GridModule,NotificationModule,
		NumberModule,SearchModule,
		SliderModule,StructuredListModule,
		

	],
	bootstrap: [AppComponent],
	
})
export class AppModule {
	constructor(protected iconService: IconService) {
		iconService.registerAll([

		]);
	}

}
