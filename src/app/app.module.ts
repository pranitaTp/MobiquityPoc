import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MomentModule } from 'angular2-moment';
import { AboutPage } from '../pages/about/about';
import { SettingPage } from '../pages/setting/setting';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { FIREBASE_CREDENTIALS } from '../config';
import { FormsModule } from '@angular/forms';
import { LoginPage } from '../pages/login/login';
import { ArticleDataProvider } from '../providers/article-data/article-data';
import { ArticleByCategoryPage } from '../pages/article-by-category/article-by-category';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AboutPage,
    SettingPage,
    HomePage,
    TabsPage,
    ArticleByCategoryPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS.fire),
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AboutPage,
    SettingPage,
    HomePage,
    TabsPage,
    ArticleByCategoryPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArticleDataProvider
  ]
})
export class AppModule {}
