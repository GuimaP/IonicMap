  import {Component, OnInit, Input} from '@angular/core';
  import {NavController, Platform} from 'ionic-angular';

  import {SharedData} from '../../providers/shared-data/shared-data';

  import {PetShop} from '../../model/PetShop';
  import {DetailsPetPage} from '../details-pet/details-pet';

  @Component({
    templateUrl: 'build/pages/home/home.html'
  })
  export class HomePage implements OnInit{
    private map;

    public pets = [];

    constructor(
        private navCtrl: NavController,
        private platform:Platform
    ) {}

      ngOnInit(){
        this.pets.push(new PetShop(1,"Clínica Veterinária Cão Q Mia",-23.5763088,-46.6249815));
        this.pets.push(new PetShop(2,"Centro de Estética Animal Silver Dog",-23.5767618,-46.6246469));

        console.log(this.pets);
      }

      tap(petshop){
        // let topPage = window.document.getElementsByTagName('ion-tabbar')[0].getAttribute("style");
        // SharedData.setData('topPage',topPage);

        // window.document.getElementsByTagName('ion-tabbar')[0].setAttribute("style","visibility:hidden");
        // window.document.getElementsByTagName('ion-tab')[0].setAttribute("style","visibility:hidden;display:none;");
        this.navCtrl.push(DetailsPetPage,{pet: petshop});
      }


  }


