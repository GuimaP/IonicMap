///<reference path="../Helper/DistanceAlgorithm.ts"/>
import {DistanceAlgorithm} from "../Helper/DistanceAlgorithm";
export class PetShop {
    private distance:string = "";

    constructor(
        public id:number,
        private _name:string,
        private _latitude:any,
        private _longitude:any
    ){

        this.calcDistance();
    }

    get name():string{

        return this._name;
    }

    set name(value:string){
        this._name=value;
    }

    get latitude():number{
        return this._latitude;
    }

    set latitude(value:number){
        this._latitude=value;
    }

    get longitude():number{
        return this._longitude;
    }

    set longitude(value:number){
        this._longitude=value;
    }

    calcDistance():any{
        navigator.geolocation.getCurrentPosition((r) =>{
            let lat = r.coords.latitude;
            let lon = r.coords.longitude;

            let distance = new DistanceAlgorithm();
            let resultado = distance.DistanceBetweenPlaces(
                lon,
                lat,
                parseFloat(this._longitude),
                parseFloat(this._latitude)
            );

            let numero:number;
            numero = Number(resultado.toFixed(2));
            let distanciaFormated =  numero * 1000;


            if(numero < 1) {
                this.distance =  distanciaFormated + " metros";
            }else {
                this.distance = distanciaFormated + " kilometros"
            }

        }, null, {
            enableHighAccuracy: true,
            timeout: 5000
        });

    }
}
