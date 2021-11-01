function pointsMap() {
	var opts = {
	    center: new google.maps.LatLng(52.1972668, 21.0278658),
	    zoom:11,
	    maxZoom:11,
	    panControl: false,
	    zoomControl: true,
	    mapTypeControl: false,
	    scaleControl: false,
	    streetViewControl: false,
	    overviewMapControl: false,
	    rotateControl: false,
	    scrollwheel: false
	};
	var map = new google.maps.Map(document.getElementById("map-container"),opts);
	var point1 = new google.maps.Marker({
	 	position: new google.maps.LatLng(52.1972668, 21.0278658),
	 	map: map,
	 	animation: google.maps.Animation.Drop
	});
}