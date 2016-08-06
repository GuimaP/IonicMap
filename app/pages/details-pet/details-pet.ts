import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {Geolocation, GoogleMap, GoogleMapsEvent, GoogleMapsLatLng} from "ionic-native/dist/index";
import {SharedData} from "../../providers/shared-data/shared-data";

/*
  Generated class for the DetailsPetPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/details-pet/details-pet.html',
})
export class DetailsPetPage implements OnInit {
  private map;
  private petshop;

  constructor(
      private nav: NavController,
      private navParams:NavParams,
      private platform:Platform
  ) {

  }

  ngOnInit():any {
    this.petshop = this.navParams.get("pet");
    this.platform.ready().then(()=>{

      // this.setupMap();
    });


  }

  setupMap(){



    /*GoogleMap.isAvailable().then(() => {
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
    });*/

    GoogleMap.isAvailable().then(() => {
      this.map = new GoogleMap('map-details');
      this.map.setVisible(true);
      this.map.setBackgroundColor("#FFFFFF");
        var options =  {
          enableHighAccuracy: true,
          timeout: 5000
        };
        Geolocation.getCurrentPosition(options).then((resp) => {
          console.log(resp);
          let lat = resp.coords.latitude;
          let lon = resp.coords.longitude;
          // let lat = resp.latLng.lat;
          // let lon = resp.latLng.lng;

          console.log("Positions is avaliable",lat,lon);


            this.map.refreshLayout();

            console.log("Google is avaliable");

            this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
              console.log("Maps i avaliable");

              let myPosition = new GoogleMapsLatLng(lat,lon);
              this.map.setCenter(myPosition);
              this.map.addMarker({icon:"blue",title:"Estou aqui", position: myPosition});

              let petLocation = new GoogleMapsLatLng(this.petshop.latitude,this.petshop.longitude);
              this.map.addMarker({icon:"red",title:"PET é aqui", position: petLocation});

              this.map.animateCamera({ target: myPosition, zoom: 14 });

            });



        }).catch((e)=>{
          console.log("error ao carregar o gps ",e);
        });
    });

  }

  ionViewWillUnload(){
    // this.map.clear();
    // let topPage = SharedData.getData('topPage');
    // window.document.getElementsByTagName('ion-tabbar')[0].setAttribute("style","visibility:block;"+topPage );
    // window.document.getElementsByTagName('ion-tab')[0].setAttribute("style","visibility:block;display:initial");
    // window.document.getElementsByTagName('ion-tab')[1].setAttribute("style","visibility:block;display:initial");
  }

}
