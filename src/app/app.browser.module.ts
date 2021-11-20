import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule,} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CategoryComponent } from './category/category.component';
import { TemplatesComponent } from './templates/templates.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateService } from './shared/apiservices/template.service';
import { TeamComponent } from './team/team.component';
import { IndividualComponent } from './individual/individual.component';
import { ContactComponent } from './contact/contact.component';
import { TehnologyComponent } from './tehnology/tehnology.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppModule,
    BrowserTransferStateModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TemplateService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
