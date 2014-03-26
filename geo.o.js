var GEO = {
	
	currentRadius:6378.15,
	
	setRadius: function(r){
		this.currentRadius=r;
	}
	
	radiusOf: function(planet){/*kilometers*/
		switch(planet.toLowerCase()){
			case 'earth':
				return 6378.15;	
			break;
			case 'mars':
				return 3397;	
			break;
			case 'moon':
				return 1737.4;	
			break;
			case 'sun':
				return 695500;	
			break;
			case 'mercury':
				return 2440;	
			break;
			case 'venus':
				return 6052;
			break;
			case 'jupiter':
				return 69911;	
			break;
			case 'saturn':
				return 58232;	
			break;
			case 'neptune':
				return 24622;	
			break;
			case 'uranus':
				return 25362;	
			break;
			case 'pluto':
				return 1180;	
			break;
			case 'io':
				return 3642;	
			break;
			case 'europa':
				return 3122;	
			break;
			case 'ganymede':
				return 5262;	
			break;
		}
	}
	
	kilometersToMilesConstant: function(){
		return 0.621371;
	}

	distanceLatLonInKilometers: function(lat1,lon1,lat2,lon2){
		var dLat = (lat2-lat1) * Math.PI / 180;
		var dLon = (lon2-lon1) * Math.PI / 180;
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
			Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
			Math.sin(dLon/2) * Math.sin(dLon/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		var d = this.currentRadius * c;
		return d;
	},

	distanceLatLonInMeters: function(lat1,lon1,lat2,lon2){
		return GEO.distanceLatLonInKilometers(lat1,lon1,lat2,lon2) * 1000; 
	},
	
	distanceLatLonInMiles: function(lat1,lon1,lat2,lon2){
		return GEO.distanceLatLonInKilometers(lat1,lon1,lat2,lon2) * GEO.kilometersToMilesConstant;
	}
	

};
