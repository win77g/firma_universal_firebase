import { BrowserModule } from '@angular/platform-browser';
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
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CategoryComponent,
    TemplatesComponent,
    TeamComponent,
    IndividualComponent,
    ContactComponent,
    TehnologyComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TransferHttpCacheModule,
    NgtUniversalModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TemplateService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
