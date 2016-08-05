  import {Component, OnInit, Input} from '@angular/core';
  import {NavController, Platform} from 'ionic-angular';


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

        this.navCtrl.push(DetailsPetPage,{pet: petshop})
      }


  }


