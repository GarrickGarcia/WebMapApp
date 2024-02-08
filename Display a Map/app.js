require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView"
], function(esriConfig, Map, MapView) {

  esriConfig.apiKey = "AAPK80a780885f4f481a89f82b83bce95a05mqojZ_fFWglSjUCDjuWKI23B5MKDU1lVv0dp9uf5-I-owKTQBtYD4haE-mvnbcpF";

  const map = new Map({
    basemap: "arcgis-topographic" 
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-86.4842, 42.0998],
    zoom: 13
  });

});