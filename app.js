require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Editor",
    // Other required modules
], function(Map, MapView, Editor) {
    var map = new Map({
        basemap: "streets"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 5,
        center: [15, 65] // Longitude, latitude
    });

    var editor = new Editor({
        view: view
        // Additional Editor settings
    });
    // Place the editor widget in the editPane div
    document.getElementById('editPane').appendChild(editor.domNode);
});
