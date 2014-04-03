var GEO = {
	
	radius: function(planet){
		switch(planet){
			case 'earth':
				return 6378.15;	
			break;
		}
	},
	
	kilometersToMilesConstant: function(){
		return 0.621371;
	},

	distanceLatLonInKilometers: function(lat1,lon1,lat2,lon2){
		var R = GEO.radius('earth');
		var dLat = (lat2-lat1) * Math.PI / 180;
		var dLon = (lon2-lon1) * Math.PI / 180;
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
			Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
			Math.sin(dLon/2) * Math.sin(dLon/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		var d = R * c;
		return d;
	},

	distanceLatLonInMeters: function(lat1,lon1,lat2,lon2){
		return GEO.distanceLatLonInKilometers(lat1,lon1,lat2,lon2) * 1000; 
	},
	
	distanceLatLonInMiles: function(lat1,lon1,lat2,lon2){
		return GEO.distanceLatLonInKilometers(lat1,lon1,lat2,lon2) * GEO.kilometersToMilesConstant;
	}
	

};
