import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticleByCategoryPage } from './article-by-category';

@NgModule({
  declarations: [
    ArticleByCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticleByCategoryPage),
  ],
})
export class ArticleByCategoryPageModule {}
