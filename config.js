var config = {
	"requireArcGISLogin": false, // Does the user need to log in to ArcGIS Online or ArcGIS Server?
	"tokenUrl": 'https://www.arcgis.com/sharing/generateToken', // ArcGIS token generation URL

	"title": "Plotting Defoe's Novels",
	"start": {
		// "maxZoom": 16,
		"center": [46, 7],
		"zoom": 4,
		"attributionControl": true,
		"zoomControl": false
	},
	"about": {
		"title": "Plotting Defoe's Novels",
		"contents": "<p>This is an open-source version of the excellent <a href='https://github.com/bmcbride/bootleaf'>Bootleaf map </a>started by Bryan McBride.</p><p>It's designed for rapid web map development. See <a href='https://github.com/iag-geo/bootleaf'>https://github.com/iag-geo/bootleaf</a> for more information.</p><p>Chage this message in the config file</p>"
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
			"id": "theatres",
			"name": "Theatres",
			"type": "geoJSON",
			"cluster": true,
			"showCoverageOnHover": false,
			"minZoom": 12,
			"url": "./data/theatres.geojson",
			"icon": {
				"iconUrl": "./img/theater.png",
				"iconSize": [24, 28]
			},
			"style": {
				"stroke": true,
				"fillColor": "#00FFFF",
				"fillOpacity": 0.5,
				"radius": 10,
				"weight": 0.5,
				"opacity": 1,
				"color": '#727272',
			},
			"visible": false,
			// "label": {
			// 	"name": "NAME",
			// 	"minZoom": 14
			// }
		},
		{
			"id": "museums",
			"type": "geoJSON",
			"cluster": true,
			"showCoverageOnHover": false,
			"minZoom": 12,
			"popup": true,
			"url": "data/museums.geojson",
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
				"iconUrl": "./img/museum.png",
				"iconSize": [24, 28]
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
		}, {
			"id": "cities",
			"name": "US cities (feature)",
			"type": "agsFeatureLayer",
			"cluster": true,
			"showCoverageOnHover": false,
			"removeOutsideVisibleBounds": true,
			"url": "http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0",
			"popup": true,
			"tooltipField": "areaname",
			"outFields": [{
					"name": "areaname",
					"alias": "Name"
				},
				{
					"name": "st",
					"alias": "State"
				},
				{
					"name": "pop2000",
					"alias": "Population"
				},
				{
					"name": "class",
					"alias": "Class"
				},
				{
					"name": "objectid"
				}
			],
			"visible": true,
			"queryWidget": {
				"queries": [{
						"name": "areaname",
						"alias": "Name",
						"defaultOperator": "starts with"
					},
					{
						"name": "pop2000",
						"alias": "Population",
						"type": "numeric"
					},
					{
						"name": "capital",
						"alias": "Capital",
						"type": "boolean"
					}
				],
				"outFields": [{
						"name": "areaname",
						"alias": "Name"
					},
					{
						"name": "st",
						"alias": "State"
					},
					{
						"name": "pop2000",
						"alias": "Population"
					},
					{
						"name": "class",
						"alias": "Class"
					},
					{
						"name": "capital",
						"alias": "Capital",
						"type": "boolean"
					},
				]
			},
			"filters": [{
					"name": "pop2000",
					"alias": "Population",
					"type": "numeric"
				},
				{
					"name": "st",
					"alias": "State abbreviation"
				},
			],
			"style": {
				"stroke": true,
				"fillColor": "#00FFFF",
				"fillOpacity": 0.5,
				"radius": 10,
				"weight": 0.5,
				"opacity": 1,
				"color": '#727272'
			},
		},
	]
}