import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { RecoverPage } from '../pages/recover/recover';
import { OfficesPage } from '../pages/offices/offices';
import { ProfilePage } from '../pages/profile/profile';
import { NewsPage } from '../pages/news/news';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Recuperar', component: RecoverPage },
      { title: 'Sucursales', component: OfficesPage },
      { title: 'Mi perfil', component: ProfilePage },
      { title: 'Novedades', component: NewsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
