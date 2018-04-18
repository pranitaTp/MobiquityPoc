import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

const BASE_URL: string =  'https://www.reddit.com/';
const JSON_POSTFIX: string = '.json';

@Injectable()
export class ArticleDataProvider {

  article:any;

  constructor(public http: Http) {
    
  }
  
 

  fetch(url?: string) {
    return url ?
      this.http.get(BASE_URL + '/r/' + url + JSON_POSTFIX)
        .map(this.redditCollectionToJson) :
      this.http.get(BASE_URL + JSON_POSTFIX)
        .map(this.redditCollectionToJson)
  }


  redditCollectionToJson(response) {
    return response.json().data.children.map(c => c.data)
  }
  

}
