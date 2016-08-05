  import {Component, OnInit, Input} from '@angular/core';
  import {NavController, Platform} from 'ionic-angular';
  import {GoogleMap, GoogleMapsEvent, GoogleMapsMarker, GoogleMapsLatLng, Geolocation} from 'ionic-native';

  import {PetShop} from '../../model/PetShop';
  import {DetailsPetPage} from '../details-pet/details-pet';
  import {SharedData} from "../../providers/shared-data/shared-data";

  @Component({
    templateUrl: 'build/pages/home/home.html'
  })
  export class HomePage implements OnInit{
    private map;

    public pets = [];

    constructor(
        private navCtrl: NavController,
        private platform:Platform
    ) {
      console.log(this.pets);
      this.platform.ready().then(() => {
          //this.setupGoogleMap()
         });
      }

      ngOnInit(){
        this.pets.push(new PetShop(1,"Clínica Veterinária Cão Q Mia",-23.5763088,-46.6249815));
        this.pets.push(new PetShop(2,"Centro de Estética Animal Silver Dog",-23.5767618,-46.6246469));
        this.pets.push(new PetShop(3,"Pet Shop dan dan",-23640130,-46607164));

        console.log(this.pets);
      }

      tap(petshop){
          let topPage = window.document.getElementsByTagName('ion-tabbar')[0].getAttribute("style");
          console.log(topPage);
          SharedData.setData('topPage',topPage);
        console.log('pass');

          window.document.getElementsByTagName('ion-tabbar')[0].setAttribute("style","visibility:hidden");
          window.document.getElementsByTagName('ion-tab')[0].setAttribute("style","visibility:hidden;display:none;");
          window.document.getElementsByTagName('ion-tab')[1].setAttribute("style","visibility:hidden;display:none;");
          this.navCtrl.push(DetailsPetPage,{pet: petshop})
      }

      setupGoogleMap(){

        this.map = new GoogleMap('map');

        GoogleMap.isAvailable().then(() => {


          this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {


            let myPosition = new GoogleMapsLatLng(38.9072, -77.0369);
            console.log("My position is", myPosition);

            let latLng = new GoogleMapsLatLng(-23.6339946,-46.6077185);


            this.map.setCenter(latLng);
            this.map.addMarker({icon:"blue",title:"Discubra", position: latLng});
            this.map.animateCamera({ target: latLng, zoom: 10 });
          });
        });
      }
  }


