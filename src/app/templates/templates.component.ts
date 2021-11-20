import { Component, OnInit, OnDestroy } from '@angular/core';
import { TemplateService } from '../shared/apiservices/template.service';
import { Template } from '../shared/models/template.models';
import { ActivatedRoute, Params } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.sass']
})
export class TemplatesComponent implements OnInit ,OnDestroy{

  constructor(private Te:TemplateService,private route: ActivatedRoute,) { }
  templ:Template[]
  sub1:Subscription;

  ngOnInit() {


    this.sub1 = this.route.params
      .pipe(mergeMap((params:Params)=>this.Te.getTemplCategory(params['category'])))
      .subscribe((data:Template[])=>{
          this.templ=data;
          console.log(this.templ);

  })
 }
  ngOnDestroy(){
      this.sub1.unsubscribe();
  }
}
