import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { RecoverPage } from '../pages/recover/recover';
import { OfficesPage } from '../pages/offices/offices';
import { OfficePage } from '../pages/office/office';
import { ProfilePage } from '../pages/profile/profile';
import { NewsPage } from '../pages/news/news';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    RecoverPage,
    OfficesPage,
    OfficePage,
    ProfilePage,
    NewsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    RecoverPage,
    OfficesPage,
    OfficePage,
    ProfilePage,
    NewsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
