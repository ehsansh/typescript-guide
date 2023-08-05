export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(id: string) {
        this.googleMap = new google.maps.Map(document.getElementById(id)!, {
            zoom: 1,
            center: new google.maps.LatLng(0, 0),
        });
    }
}
