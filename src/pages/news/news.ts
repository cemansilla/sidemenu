import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
    news:any = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.listNews();
    }

    listNews(){
        this.news.push(
            {
                img: "spinetta.jpg",
                title: "Lorem ipsum dolor sit amet",
                description: "Consectetur adipiscing elit. Mauris lobortis lacus vel tortor ultricies dictum. Nullam ut est sagittis, dignissim felis in, bibendum enim. Pellentesque venenatis ex justo, eget elementum nisi laoreet in"
            },
            {
                img: "spinetta2.jpg",
                title: "Pellentesque et sapien sit amet tortor",
                description: "Convallis dapibus et ac quam. Duis elit odio, sodales ullamcorper ultricies et, hendrerit sed ipsum. Nunc odio ante, pharetra nec justo sit amet, tempus hendrerit lorem. Quisque vel sem nec lacus porta auctor."
            }
        );
    }
}
