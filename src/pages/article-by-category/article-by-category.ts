import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArticleDataProvider } from '../../providers/article-data/article-data';

//list of articles by category

@IonicPage()
@Component({
  selector: 'page-article-by-category',
  templateUrl: 'article-by-category.html',
})
export class ArticleByCategoryPage {


  loadCompleted: boolean = false;
  posts: Array<any>;
  category:string;
  filterByNumber: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public _data:ArticleDataProvider) 
  {
      this.category=navParams.get('CATEGORY');
      this.filterByNumber=navParams.get('NUMBER_OF_POST')
      this.load(this.category);
  }

  load(url?) {
    this._data.fetch(url).subscribe((posts) => {
      if(this.filterByNumber!=0)
      this.posts = posts.slice(0,this.filterByNumber);
      else
      this.posts=posts;

      this.loadCompleted = true;
      console.log("articleBycategory"+JSON.stringify(posts))
    })
  }

  
  readPost(post) { 
    this.goToPost(post); 
  }

  getAutherThumbnail(post)
  {
      return post.thumbnail; 
  }

  goToPost(post) {
    window.open(post.url, '_blank');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticleByCategoryPage');
  }

}
