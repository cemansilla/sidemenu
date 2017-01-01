import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NewsPage } from '../news/news';
import { OfficesPage } from '../offices/offices';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

    constructor(public navCtrl: NavController) {}

    goNews(){
        this.navCtrl.push(NewsPage);
    }

    goOffices(){
        this.navCtrl.push(OfficesPage);
    }
}
