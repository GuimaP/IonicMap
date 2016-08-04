  import {Component} from '@angular/core';
  import {NavController, Platform} from 'ionic-angular';
  import {GoogleMap, GoogleMapsEvent, GoogleMapsMarker, GoogleMapsLatLng} from 'ionic-native';

  @Component({
    templateUrl: 'build/pages/home/home.html'
  })
  export class HomePage {
    private map;
    constructor(private navCtrl: NavController,private platform:Platform) {
      this.platform.ready().then(() => {
          this.setupGoogleMap()
         });
      }




    setupGoogleMap(){

      this.map = new GoogleMap('map');

      GoogleMap.isAvailable().then(() => {
      // this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
      //   () => this.onMapReady(),
      //   () => alert("Error: onMapReady")
      // );

      // this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
      //   (data: any) => {
      //     alert("GoogleMap.onMapReady(): ");
      //   },
      //   () => alert("Error: GoogleMapsEvent.MAP_READY")
      // );

        this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
          //alert("GoogleMap.onMapReady(): " + JSON.stringify(data));

          let myPosition = new GoogleMapsLatLng(38.9072, -77.0369);
          console.log("My position is", myPosition);
          
          let latLng = new GoogleMapsLatLng(-23.6339946,-46.6077185);
          
          
          this.map.setCenter(latLng);
          this.map.addMarker({icon:"blue",title:"Discubra", position: latLng});
          this.map.animateCamera({ target: latLng, zoom: 10 });
        });
      });
      // somewhere in your component
      // this.map = new GoogleMap('map');

      // let latLng = new GoogleMapsLatLng(-53.6339946,-76.6077185);
      // let marker = new GoogleMapsMarker(this.map);
      // marker.setPosition(latLng);

      // this.map.addMarker(marker);
      // this.map.setCenter(latLng);
      // this.map.setZoom(12);

      // this.map.on(GoogleMapsEvent.MAP_READY)
      // .subscribe(() => console.log("Map is ready!"));
    }
  }
