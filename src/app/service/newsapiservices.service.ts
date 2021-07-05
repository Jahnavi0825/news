import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {
  _http: any;

  constructor(_private_http:HttpClient) { }
  //newsapiurl
  newsApiURl ="https://newsapi.org/v2/top-headlines?country=us&apiKey=0c397318a74d416888d890404bdc151b";
 //topheading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiURl);
  }  

}
