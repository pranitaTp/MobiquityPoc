import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArticleDataProvider } from '../../providers/article-data/article-data';
import { Subscription } from 'rxjs';
import { ArticleByCategoryPage } from '../../pages/article-by-category/article-by-category';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  articleData:Array<any>;
  loadCompleted: boolean = false;
  category="default";

  posts: Array<any>;
  filterByNumber:number=0;;
  //checkedItems:boolean[];
  categoryTitleList: Array<String> =["Sports","Politics","Technology", "Food","News","Music","Funny","Gaming","Art"] ;
  
  constructor(public navCtrl: NavController,public _data:ArticleDataProvider,private storage:Storage) 
  {
      this.load(this.category);
      //this.checkedItems = new Array(this.categoryTitleList.length);
  }

  load(url?) {
    this._data.fetch(url).subscribe((posts) => {
    this.posts = posts;
    this.loadCompleted = true;
    console.log("loadHome"+JSON.stringify(posts))
  })
  }

  getFilterNumber(value)
  {
      this.filterByNumber=value;
  }

  displayArticle(selectedItem)
  {
    this.navCtrl.push(ArticleByCategoryPage,{CATEGORY:selectedItem,NUMBER_OF_POST:this.filterByNumber});
  }

  // saveCategory(D)
  // {
  //   this.storage.set('STORE_CATEGORY_ARRAY',D);
  // }
}
