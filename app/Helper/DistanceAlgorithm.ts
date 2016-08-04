
export class DistanceAlgorithm {
    private PIx:number = 3.141592653589793;
    private RADIUS:number = 6378.16;

    constructor() {}

    radians(x:number):number {

        return x * this.PIx / 180;
    }

    DistanceBetweenPlaces(
        lon1:number,
        lat1:number,
        lon2:number,
        lat2:number
    ):number{
        let dlon = this.radians(lon2 - lon1);
        let dlat = this.radians(lat2 - lat1);

        let a:number = (Math.sin(dlat / 2) * Math.sin(dlat / 2)) + Math.cos(this.radians(lat1)) * Math.cos(this.radians(lat2)) * (Math.sin(dlon / 2) * Math.sin(dlon / 2));
        let angle:number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return angle * this.RADIUS;
    }


}