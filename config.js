var config = {
	"requireArcGISLogin": false, // Does the user need to log in to ArcGIS Online or ArcGIS Server?
	"tokenUrl": 'https://www.arcgis.com/sharing/generateToken', // ArcGIS token generation URL

	"title": "Plotting Defoe's Travel Novels",
	"start": {
		// "maxZoom": 16,
		"center": [46, 7],
		"zoom": 4,
		"attributionControl": true,
		"zoomControl": false
	},
	"about": {
		"title": "Plotting Defoe's Novels",
		"contents": "<p>My research project was an emotion map of Daniel Defoe’s adventure novels. The novels used were Robinson Crusoe (1719), Captain Singleton (1720), and Colonel Jack (1722). The map was meant to show the emotions associated with locations mentioned (not necessarily visited) in these books using sentiment analysis tools and my own interpretation. The locations in these passages are graded as having a negative, neutral or positive sentiment.</p><p>Read more about<a href='https://github.com/tiger-fish/defoe-map-v2/'> this project here</a>.</p><p>This was made using <a href='https://github.com/iag-geo/bootleaf'>https://github.com/iag-geo/bootleaf</a>.</p><div><h2>Compass: click on markers</h2><p>Vader: Score using <a href='https: //github.com/cjhutto/vaderSentiment'>Vader Sentiment Analysis Tool</a></p><p>Stanford: Score using <a href='https://nlp.stanford.edu/sentiment/'>Stanford Sentiment Analysis Tool</a></p><p>My Score: Score using my own intepretation of the passage associated with the location word</p><p>AntConc Collocation: Peripheral Words surrounding the location word using <a href='https://www.laurenceanthony.net/software/antconc/'>AntConc</a></p></div>"
	},
	"controls": {
		"zoom": {
			"position": "bottomright"
		},
		"leafletGeocoder": {
			//https://github.com/perliedman/leaflet-control-geocoder
			"collapsed": false,
			"position": "topleft",
			"placeholder": "Search for a location",
			"type": "ArcGIS", // OpenStreetMap, Google, ArcGIS
			//"suffix": "Australia", // optional keyword to append to every search
			//"key": "AIzaS....sbW_E", // when using the Google geocoder, include your Google Maps API key (https://developers.google.com/maps/documentation/geocoding/start#get-a-key)
		},
		"TOC": {
			//https://leafletjs.com/reference-1.0.2.html#control-layers-option
			"collapsed": false,
			"uncategorisedLabel": "Layers",
			"position": "topright",
			"toggleAll": true
		},
		"history": {
			"position": "bottomleft"
		},
		// "bookmarks": {
		// 	"position": "bottomright",
		// 	"places": [{
		// 		"latlng": [
		// 			40.7916, -73.9924
		// 		],
		// 		"zoom": 12,
		// 		"name": "Manhattan",
		// 		"id": "a148fa354ba3",
		// 		"editable": true,
		// 		"removable": true
		// 	}]
		// }
	},

	"activeTool": "filterWidget", // options are identify/coordinates/queryWidget
	// "basemaps": ['esriGray', 'esriDarkGray', 'esriStreets', 'OpenStreetMap', "Aerial"],
	"basemaps": ['esriNationalGeographic',
		'esriGray', 'esriDarkGray', 'esriStreets', 'OpenStreetMap'
	],
	// "bing_key": "enter your Bing Maps key",
	// "mapboxKey": "enter your MapBox key",
	// "defaultIcon": {
	// 	"imagePath": "https://leafletjs.com/examples/custom-icons/",
	// 	"iconUrl": "leaf-green.png",
	// 	"shadowUrl": "leaf-shadow.png",
	// 	"iconSize":     [38, 95],
	// 		"shadowSize":   [50, 64],
	// 		"iconAnchor":   [22, 94],
	// 		"shadowAnchor": [4, 62],
	// 		"popupAnchor":  [-3, -76]
	// },
	"tocCategories": [{
			"name": "GeoJSON layers",
			"layers": ["theatres", "museums", "us_density"]
		},
		{
			"name": "ArcGIS Layers",
			"layers": ["cities", "counties", "railways", "us_states"]
		},
		{
			"name": "WMS/WFS layers",
			"layers": ["US_population", "countries"],
			"exclusive": false
		}
	],
	"projections": [{
		4269: '+proj=longlat +ellps=GRS80 +datum=NAD83 +no_defs '
	}],
	"highlightStyle": {
		"weight": 2,
		"opacity": 1,
		"color": 'white',
		"dashArray": '3',
		"fillOpacity": 0.5,
		"fillColor": '#E31A1C',
		"stroke": true
	},
	"layers": [{
		"id": "Defoe's Novel Locations",
		"type": "geoJSON",
		"cluster": true,
		"showCoverageOnHover": false,
		// "minZoom": 12,
		"popup": true,
		"url": "data/defoe.geojson",
		"style": {
			"stroke": true,
			"fillColor": "#00FFFF",
			"fillOpacity": 0.5,
			"radius": 10,
			"weight": 0.5,
			"opacity": 1,
			"color": '#727272'
		},
		"icon": {
			"iconUrl": "./img/ship.png",
			"iconSize": [50, 50]
		},
		"visible": true,
		// "label": {
		// 	"name": "NAME",
		// 	"minZoom": 14
		// }
		"outFields": [{
			"name": "NAME",
			"alias": "name"
		}, ]
	}, ]
}
