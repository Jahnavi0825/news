import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { TechnewsComponent } from '../technews/technews.component';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private http:HttpClient) { }
  //newsapiurl
  newsApiURl ="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0c397318a74d416888d890404bdc151b";
 //topheading()
  techApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=0c397318a74d416888d890404bdc151b"

  topHeading():Observable<any>
  {
    return this.http.get(this.newsApiURl);
  }  

  techNews():Observable<any>
  {
    return this.http.get(this.techApiUrl);
  }  

}



