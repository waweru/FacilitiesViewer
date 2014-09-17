// JavaScript Document
var map;
var overviewMapDijit;
var navtoolbar;
var measurement;
var startExtent;

function zoomToStart() {
    var startExtent = new esri.geometry.Extent({
        "xmin": 3095699.6455488345,
        "ymin": -3904084.2526904903,
        "xmax": 3108751.2681285106,
        "ymax": -3897940.6265420774,
        "spatialReference": { "wkid": 102100 }
    }); 
    map.setExtent(startExtent);
}

function zoomLast_onClick() {
    navtoolbar.zoomToPrevExtent();
    map.enableScrollWheelZoom();
}

function zoomNext_onClick() {
    navtoolbar.zoomToNextExtent();
    map.enableScrollWheelZoom();
}

function zoomIn_onClick() {
    navtoolbar.activate(esri.toolbars.Navigation.ZOOM_IN);
    map.enableScrollWheelZoom();
}

function zoomOut_onClick() {
    navtoolbar.activate(esri.toolbars.Navigation.ZOOM_OUT);
    map.enableScrollWheelZoom();
    map.hidePanArrows();
    map.openHandCursorVisible = true;
}

function pan_onClick() {
    navtoolbar.activate(esri.toolbars.Navigation.PAN);
    map.enableScrollWheelZoom();
}

function OverViewMap()
{
	var overviewMapDijit = new esri.dijit.OverviewMap({
    map: map,
    attachTo: "bottom-right",
    color:" #D84E13",
    opacity: .40
    }
//,  dojo.byId("overviewDiv")
  );
  overviewMapDijit.startup();	
}

function ScaleBar()
{
	var scalebar = new esri.dijit.Scalebar({
		map:map,
		attachTo: "bottom-left",
		scalebarStyle: "ruler",
		scalebarUnit: "metric"
		});
}

function Measure() {
    var measurement = new esri.dijit.Measurement({
        map: map,
        defaultAreaUnit: esri.Units.HECTARES,
        defaultLengthUnit: esri.Units.METERS
    }, "measureDiv");
    measurement.startup();
	
}

function BasemapGallery() {
	basemapGallery = new BasemapGallery({
		showArcGISBasemaps: true,
		map: map
	}, "basemapGalleryDiv");
	basemapGallery.startup();
	
	basemapGallery.on("error", function(msg) {
	console.log("basemap gallery error:  ", msg);
      });
}

function showCoordinates(evt) {
          //the map is in web mercator but display coordinates in geographic (lat, long)
          //var mp = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
		  var geom = new esri.geometry.webMercatorUtils.geographicToWebMercator(candidate.location);
          //display mouse coordinates
          //dom.byId("info").innerHTML = mp.x.toFixed(3) + ", " + mp.y.toFixed(3);
        }