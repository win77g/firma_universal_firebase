import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http:HttpClient,) { }

url = environment.api_base
// поучаем list news
//   getNewsList(){
//          return this.http.get(this.url+`/news/`)
//       }
// // поучаем detal news
//   getNewsItem(id:number){
//          return this.http.get(this.url+`/news/?id=${id}`)
//       }
// поучаем detal news
  getTemplCategory(category:string){
          return this.http.get(this.url+`/template/?category=${category}`)
      }
// поучаем list category
  // getCategoryNews(){
  //         return this.http.get(this.url+`/category_news/`)
  //     }
     }
