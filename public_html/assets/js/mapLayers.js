//Used to consume map and feature services as layers on the web application

	var map;
	var navtoolbar;
	var basemapGallery;
	var measurement;

      require([
        "esri/map", "esri/InfoTemplate", "esri/layers/FeatureLayer", "esri/toolbars/navigation", "esri/dijit/Measurement", "esri/dijit/BasemapGallery", "esri/arcgis/utils",
        "dojo/parser", "dijit/layout/BorderContainer",
		"dijit/layout/ContentPane", "dijit/TitlePane", "dojo/domReady!"
      ], function(
        Map, InfoTemplate, FeatureLayer, Navigation, Measurement, BasemapGallery, arcgisUtils, 
        parser
		) {
        parser.parse();
        
		map = new Map("mapDiv", { 
          basemap: "topo",
          center: [27.8517, -33.0503],
          zoom: 14
        });
		
		//Basemap Switcher
		basemapGallery = new BasemapGallery({
			showArcGISBasemaps: true,
			map: map
		}, "basemapGalleryDiv");
		basemapGallery.startup();
		
		basemapGallery.on("error", function(msg) {
        console.log("basemap gallery error:  ", msg);
      });
		
		//Measurement Tool
		measurement = new Measurement({
			map: map,
			defaultAreaUnit: esri.Units.HECTARES,
			defaultLengthUnit: esri.Units.METERS
		}, "measureDiv");
		measurement.startup();
 		
		//Instantiate the navigation tool
		navtoolbar = new Navigation(map);

		//map.on("load", initOperationalLayer);
		
        function initOperationalLayer() {
          //Feature Layers
		var buildinglinesLayer = new FeatureLayer("http://192.168.10.67:6080/arcgis/rest/services/ELIDZ/FixedAssets/FeatureServer/38", {
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          id: "buildinglinesLayer"
        });
		var buildingPolygonsLayer = new FeatureLayer("http://192.168.10.67:6080/arcgis/rest/services/ELIDZ/FixedAssets/FeatureServer/40", {
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          id: "buildingPolygonsLayer"
        });
		var servitudesLayer = new FeatureLayer("http://192.168.10.67:6080/arcgis/rest/services/ELIDZ/FixedAssets/FeatureServer/39", {
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          id: "servitudesLayer"
        });
		var fencesLayer = new FeatureLayer("http://192.168.10.67:6080/arcgis/rest/services/ELIDZ/FixedAssets/FeatureServer/54", {
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          id: "fencesLayer"
        });
		var contoursLayer = new FeatureLayer("http://192.168.10.67:6080/arcgis/rest/services/ELIDZ/FixedAssets/FeatureServer/62", {
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          id: "contoursLayer"
        });
		var parkingEdgesLayer = new FeatureLayer("http://192.168.10.67:6080/arcgis/rest/services/ELIDZ/FixedAssets/FeatureServer/64", {
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          id: "parkingEdgesLayer"
        });
		var roadCenterlineLayer = new FeatureLayer("http://192.168.10.67:6080/arcgis/rest/services/ELIDZ/FixedAssets/FeatureServer/65", {
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          id: "roadCenterlineLayer"
        });
		var roadEdgesLayer = new FeatureLayer("http://192.168.10.67:6080/arcgis/rest/services/ELIDZ/FixedAssets/FeatureServer/66", {
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          id: "roadEdgesLayer"
        });
		var foundationLayoutLayer = new FeatureLayer("http://192.168.10.67:6080/arcgis/rest/services/ELIDZ/FixedAssets/FeatureServer/34", {
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          id: "foundationLayoutLayer"
        });
		var landscapeLayer = new FeatureLayer("http://192.168.10.67:6080/arcgis/rest/services/ELIDZ/FixedAssets/FeatureServer/35", {
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          id: "landscapeLayer"
        });
		var pavingLayer = new FeatureLayer("http://192.168.10.67:6080/arcgis/rest/services/ELIDZ/FixedAssets/FeatureServer/36", {
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          id: "pavingLayer"
        });
		var ervenLayer = new FeatureLayer("http://192.168.10.67:6080/arcgis/rest/services/ELIDZ/FixedAssets/FeatureServer/41", {
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          id: "ervenLayer"
        });
		var zonesLayer = new FeatureLayer("http://192.168.10.67:6080/arcgis/rest/services/ELIDZ/FixedAssets/FeatureServer/42", {
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          id: "zonesLayer"
        });
          
          map.addLayer(zonesLayer);
		  map.addLayer(ervenLayer);
		  map.addLayer(pavingLayer);
		  map.addLayer(landscapeLayer);
		  map.addLayer(foundationLayoutLayer);
		  map.addLayer(roadEdgesLayer);
		  map.addLayer(roadCenterlineLayer);
		  map.addLayer(parkingEdgesLayer);
		  //map.addLayer(contoursLayer);
		  map.addLayer(fencesLayer);
		  map.addLayer(servitudesLayer);
		  map.addLayer(buildingPolygonsLayer);
		  map.addLayer(buildinglinesLayer);

        }
      });