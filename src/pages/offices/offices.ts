import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OfficePage } from "../office/office";

import { Offices } from "../../providers/offices";

@Component({
  selector: 'page-offices',
  templateUrl: 'offices.html',
  providers: [Offices]
})
export class OfficesPage {
    searchQuery:string = '';
    items:any = [];
    img_num;

    constructor(public navCtrl: NavController, public officesService:Offices) {
        this.initializeItems();
    }

    initializeItems() {
        for (let i = 0; i < 30; i++) {
            this.img_num = (i % 2 == 0) ? "1" : "2";

            this.items.push(
                {
                    id: i,
                    name: "Item " + i,
                    img: "office"+this.img_num+".png",
                    address: "Lorem ipsum 123"
                }
            );
        }
    }

    getItems(ev: any) {
        this.initializeItems();

        let val = ev.target.value;

        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return ( ( item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ) || ( item.address.toLowerCase().indexOf(val.toLowerCase()) > -1 ) );
            })
        }
    }

    doInfinite(infiniteScroll) {
        alert("doInfinite");

        setTimeout(() => {
            for (let i = 0; i < 30; i++) {
                this.img_num = (i % 2 == 0) ? "1" : "2";

                this.items.push( 
                    {
                        id: i,
                        name: "Item " + i,
                        img: "office"+this.img_num+".png",
                        address: "Lorem ipsum 123"
                    }
                );
            }

            infiniteScroll.complete();
        }, 500);
    }

    officeDetail(id){
        this.navCtrl.push(OfficePage, id);
    }
}
