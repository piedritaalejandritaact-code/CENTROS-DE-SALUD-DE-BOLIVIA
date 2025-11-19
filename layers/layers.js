var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_BOLIVIA_1 = new ol.format.GeoJSON();
var features_BOLIVIA_1 = format_BOLIVIA_1.readFeatures(json_BOLIVIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOLIVIA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOLIVIA_1.addFeatures(features_BOLIVIA_1);
var lyr_BOLIVIA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOLIVIA_1, 
                style: style_BOLIVIA_1,
                popuplayertitle: 'BOLIVIA',
                interactive: true,
                title: '<img src="styles/legend/BOLIVIA_1.png" /> BOLIVIA'
            });
var format_establecimientosalud2016_2 = new ol.format.GeoJSON();
var features_establecimientosalud2016_2 = format_establecimientosalud2016_2.readFeatures(json_establecimientosalud2016_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_establecimientosalud2016_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_establecimientosalud2016_2.addFeatures(features_establecimientosalud2016_2);
cluster_establecimientosalud2016_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_establecimientosalud2016_2
});
var lyr_establecimientosalud2016_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_establecimientosalud2016_2, 
                style: style_establecimientosalud2016_2,
                popuplayertitle: 'establecimientosalud2016',
                interactive: true,
                title: '<img src="styles/legend/establecimientosalud2016_2.png" /> establecimientosalud2016'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_BOLIVIA_1.setVisible(true);lyr_establecimientosalud2016_2.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_BOLIVIA_1,lyr_establecimientosalud2016_2];
lyr_BOLIVIA_1.set('fieldAliases', {'Id': 'Id', 'DPTOS': 'DPTOS', });
lyr_establecimientosalud2016_2.set('fieldAliases', {'gmlp_id': 'gmlp_id', 'ID': 'ID', 'CODSNIS': 'CODSNIS', 'ESTSALUD': 'ESTSALUD', 'NIVELRES': 'NIVELRES', 'TIPOEST': 'TIPOEST', 'SUBSECTOR': 'SUBSECTOR', 'AMBITOGEO': 'AMBITOGEO', 'LAT': 'LAT', 'LONG': 'LONG', 'MUNICIPIO': 'MUNICIPIO', 'DEPARTAMEN': 'DEPARTAMEN', });
lyr_BOLIVIA_1.set('fieldImages', {'Id': 'Range', 'DPTOS': 'TextEdit', });
lyr_establecimientosalud2016_2.set('fieldImages', {'gmlp_id': '', 'ID': '', 'CODSNIS': '', 'ESTSALUD': '', 'NIVELRES': '', 'TIPOEST': '', 'SUBSECTOR': '', 'AMBITOGEO': '', 'LAT': '', 'LONG': '', 'MUNICIPIO': '', 'DEPARTAMEN': '', });
lyr_BOLIVIA_1.set('fieldLabels', {'Id': 'no label', 'DPTOS': 'no label', });
lyr_establecimientosalud2016_2.set('fieldLabels', {'gmlp_id': 'no label', 'ID': 'no label', 'CODSNIS': 'no label', 'ESTSALUD': 'inline label - always visible', 'NIVELRES': 'no label', 'TIPOEST': 'no label', 'SUBSECTOR': 'no label', 'AMBITOGEO': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'MUNICIPIO': 'no label', 'DEPARTAMEN': 'no label', });
lyr_establecimientosalud2016_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});