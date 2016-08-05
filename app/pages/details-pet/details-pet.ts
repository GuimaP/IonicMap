import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {Geolocation, GoogleMap, GoogleMapsEvent, GoogleMapsLatLng} from "ionic-native/dist/index";
import {AuxMapService} from '../../Helper/auxMap';
/*
  Generated class for the DetailsPetPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/details-pet/details-pet.html',
})
export class DetailsPetPage implements OnInit{
  private map;
  private petshop;

  constructor(
      private nav: NavController,
      private aux:AuxMapService,
      private navParams:NavParams,
      private platform:Platform
  ) {
    this.aux.hideTabSubject.next(true);
   }


  ngOnInit():any {
    this.petshop = this.navParams.get("pet");
    

    this.platform.ready().then(()=>{
      this.setupMap();
    });

  }

 ionViewDidLeave(){
   this.aux.hideTabSubject.next(false);
 }

  setupMap(){
    this.map = new GoogleMap('map-details');
    this.map.setVisible(true);
    this.map.setBackgroundColor("#252525");


    GoogleMap.isAvailable().then(() => {
      console.log("Map is Avaliable");

      this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
        console.log("MApa is ready");

        let myPosition = new GoogleMapsLatLng(38.9072, -77.0369);
        console.log("My position is", myPosition);

        let latLng = new GoogleMapsLatLng(-23.6339946,-46.6077185);


        this.map.setCenter(latLng);
        this.map.addMarker({icon:"blue",title:"Discubra", position: latLng});
        this.map.animateCamera({ target: latLng, zoom: 10 });
      });
    });
    /*var options =  {
      enableHighAccuracy: true,
      timeout: 5000
    };
    Geolocation.getCurrentPosition(options).then((resp) => {
      let lat = resp.coords.latitude;
      let lon = resp.coords.longitude;

      console.log("Positions is avaliable",resp.coords);

      this.map = new GoogleMap('map');


      GoogleMap.isAvailable().then(() => {

        console.log("Google is avaliable");

        this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
          console.log("Maps i avaliable");

          let myPosition = new GoogleMapsLatLng(lat,lon);
          this.map.setCenter(myPosition);
          this.map.addMarker({icon:"blue",title:"Estou aqui", position: myPosition});

          let petLocation = new GoogleMapsLatLng(this.petshop.latitude,this.petshop.longitude);
          this.map.addMarker({icon:"blue",title:"Estou aqui", position: myPosition});

          this.map.animateCamera({ target: myPosition, zoom: 10 });
        });
      });


    }).catch((e)=>{
      console.log("error ao carregar o gps ",e);
    })*/

  }

}
