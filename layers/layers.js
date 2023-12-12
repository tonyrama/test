ol.proj.proj4.register(proj4);
ol.proj.get("OGC:CRS84h").setExtent([45.745691, -21.031045, 47.717022, -19.881349]);
var wms_layers = [];

var format_zone_etudeAmoronimania_0 = new ol.format.GeoJSON();
var features_zone_etudeAmoronimania_0 = format_zone_etudeAmoronimania_0.readFeatures(json_zone_etudeAmoronimania_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'OGC:CRS84h'});
var jsonSource_zone_etudeAmoronimania_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zone_etudeAmoronimania_0.addFeatures(features_zone_etudeAmoronimania_0);
var lyr_zone_etudeAmoronimania_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zone_etudeAmoronimania_0, 
                style: style_zone_etudeAmoronimania_0,
                interactive: false,
                title: '<img src="styles/legend/zone_etudeAmoronimania_0.png" /> zone_etudeAmoronimania'
            });
var format_distrikamoroniania_1 = new ol.format.GeoJSON();
var features_distrikamoroniania_1 = format_distrikamoroniania_1.readFeatures(json_distrikamoroniania_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'OGC:CRS84h'});
var jsonSource_distrikamoroniania_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distrikamoroniania_1.addFeatures(features_distrikamoroniania_1);
var lyr_distrikamoroniania_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_distrikamoroniania_1, 
                style: style_distrikamoroniania_1,
                interactive: false,
                title: '<img src="styles/legend/distrikamoroniania_1.png" /> distrikamoroniania'
            });
var format_fokotanyamoronimania_2 = new ol.format.GeoJSON();
var features_fokotanyamoronimania_2 = format_fokotanyamoronimania_2.readFeatures(json_fokotanyamoronimania_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'OGC:CRS84h'});
var jsonSource_fokotanyamoronimania_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fokotanyamoronimania_2.addFeatures(features_fokotanyamoronimania_2);
var lyr_fokotanyamoronimania_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fokotanyamoronimania_2, 
                style: style_fokotanyamoronimania_2,
                interactive: false,
                title: '<img src="styles/legend/fokotanyamoronimania_2.png" /> fokotanyamoronimania'
            });
var format_point_lycee_3 = new ol.format.GeoJSON();
var features_point_lycee_3 = format_point_lycee_3.readFeatures(json_point_lycee_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'OGC:CRS84h'});
var jsonSource_point_lycee_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_lycee_3.addFeatures(features_point_lycee_3);
var lyr_point_lycee_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_point_lycee_3, 
                style: style_point_lycee_3,
                interactive: true,
                title: '<img src="styles/legend/point_lycee_3.png" /> point_lycee'
            });

lyr_zone_etudeAmoronimania_0.setVisible(true);lyr_distrikamoroniania_1.setVisible(true);lyr_fokotanyamoronimania_2.setVisible(true);lyr_point_lycee_3.setVisible(true);
var layersList = [lyr_zone_etudeAmoronimania_0,lyr_distrikamoroniania_1,lyr_fokotanyamoronimania_2,lyr_point_lycee_3];
lyr_zone_etudeAmoronimania_0.set('fieldAliases', {'DIST_PCODE': 'DIST_PCODE', 'DISTRICT_N': 'DISTRICT_N', 'BNGRC_D_CO': 'BNGRC_D_CO', 'BNGRC_DIST': 'BNGRC_DIST', 'DIS_FKT': 'DIS_FKT', 'REG_PCODE': 'REG_PCODE', 'REGION_NAM': 'REGION_NAM', 'BNGRC_R_CO': 'BNGRC_R_CO', 'BNGRC_REG_': 'BNGRC_REG_', 'REG_FKT_SH': 'REG_FKT_SH', 'C_PROV': 'C_PROV', 'OLD_PROVIN': 'OLD_PROVIN', 'NOTES': 'NOTES', 'OLD_DISTRI': 'OLD_DISTRI', 'SOURCE': 'SOURCE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_distrikamoroniania_1.set('fieldAliases', {'DIST_PCODE': 'DIST_PCODE', 'DISTRICT_N': 'DISTRICT_N', 'BNGRC_D_CO': 'BNGRC_D_CO', 'BNGRC_DIST': 'BNGRC_DIST', 'DIS_FKT': 'DIS_FKT', 'REG_PCODE': 'REG_PCODE', 'REGION_NAM': 'REGION_NAM', 'BNGRC_R_CO': 'BNGRC_R_CO', 'BNGRC_REG_': 'BNGRC_REG_', 'REG_FKT_SH': 'REG_FKT_SH', 'C_PROV': 'C_PROV', 'OLD_PROVIN': 'OLD_PROVIN', 'NOTES': 'NOTES', 'OLD_DISTRI': 'OLD_DISTRI', 'SOURCE': 'SOURCE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_fokotanyamoronimania_2.set('fieldAliases', {'P_CODE': 'P_CODE', 'FOKONTANY_': 'FOKONTANY_', 'FKT_BNGRC_': 'FKT_BNGRC_', 'C_FKT_BNGR': 'C_FKT_BNGR', 'COM_PCODE': 'COM_PCODE', 'C_CODE_BNG': 'C_CODE_BNG', 'COMMUNE_NA': 'COMMUNE_NA', 'BNGRC_COM_': 'BNGRC_COM_', 'DIST_PCODE': 'DIST_PCODE', 'DISTRICT_N': 'DISTRICT_N', 'BNGRC_D_CO': 'BNGRC_D_CO', 'BNGRC_DIS_': 'BNGRC_DIS_', 'DIS_FKT': 'DIS_FKT', 'REG_PCODE': 'REG_PCODE', 'REGION_NAM': 'REGION_NAM', 'BNGRC_R_CO': 'BNGRC_R_CO', 'BNGRC_REG_': 'BNGRC_REG_', 'REG_FKT_SH': 'REG_FKT_SH', 'PROV_CODE': 'PROV_CODE', 'OLD_PROVIN': 'OLD_PROVIN', 'MILIEU': 'MILIEU', 'OLD_DISTRI': 'OLD_DISTRI', 'SOURCE': 'SOURCE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'amoroniman': 'amoroniman', });
lyr_point_lycee_3.set('fieldAliases', {'id': 'id', 'nom_etab': 'établissement', 'fokontany': 'fokontany', });
lyr_zone_etudeAmoronimania_0.set('fieldImages', {'DIST_PCODE': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'BNGRC_D_CO': 'TextEdit', 'BNGRC_DIST': 'TextEdit', 'DIS_FKT': 'TextEdit', 'REG_PCODE': 'TextEdit', 'REGION_NAM': 'TextEdit', 'BNGRC_R_CO': 'TextEdit', 'BNGRC_REG_': 'TextEdit', 'REG_FKT_SH': 'TextEdit', 'C_PROV': 'Range', 'OLD_PROVIN': 'TextEdit', 'NOTES': 'TextEdit', 'OLD_DISTRI': 'TextEdit', 'SOURCE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_distrikamoroniania_1.set('fieldImages', {'DIST_PCODE': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'BNGRC_D_CO': 'TextEdit', 'BNGRC_DIST': 'TextEdit', 'DIS_FKT': 'TextEdit', 'REG_PCODE': 'TextEdit', 'REGION_NAM': 'TextEdit', 'BNGRC_R_CO': 'TextEdit', 'BNGRC_REG_': 'TextEdit', 'REG_FKT_SH': 'TextEdit', 'C_PROV': 'Range', 'OLD_PROVIN': 'TextEdit', 'NOTES': 'TextEdit', 'OLD_DISTRI': 'TextEdit', 'SOURCE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_fokotanyamoronimania_2.set('fieldImages', {'P_CODE': 'TextEdit', 'FOKONTANY_': 'TextEdit', 'FKT_BNGRC_': 'TextEdit', 'C_FKT_BNGR': 'Range', 'COM_PCODE': 'TextEdit', 'C_CODE_BNG': 'TextEdit', 'COMMUNE_NA': 'TextEdit', 'BNGRC_COM_': 'TextEdit', 'DIST_PCODE': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'BNGRC_D_CO': 'TextEdit', 'BNGRC_DIS_': 'TextEdit', 'DIS_FKT': 'TextEdit', 'REG_PCODE': 'TextEdit', 'REGION_NAM': 'TextEdit', 'BNGRC_R_CO': 'TextEdit', 'BNGRC_REG_': 'TextEdit', 'REG_FKT_SH': 'TextEdit', 'PROV_CODE': 'Range', 'OLD_PROVIN': 'TextEdit', 'MILIEU': 'Range', 'OLD_DISTRI': 'TextEdit', 'SOURCE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'amoroniman': 'TextEdit', });
lyr_point_lycee_3.set('fieldImages', {'id': 'TextEdit', 'nom_etab': 'TextEdit', 'fokontany': 'TextEdit', });
lyr_zone_etudeAmoronimania_0.set('fieldLabels', {'DIST_PCODE': 'no label', 'DISTRICT_N': 'no label', 'BNGRC_D_CO': 'no label', 'BNGRC_DIST': 'no label', 'DIS_FKT': 'no label', 'REG_PCODE': 'no label', 'REGION_NAM': 'no label', 'BNGRC_R_CO': 'no label', 'BNGRC_REG_': 'no label', 'REG_FKT_SH': 'no label', 'C_PROV': 'no label', 'OLD_PROVIN': 'no label', 'NOTES': 'no label', 'OLD_DISTRI': 'no label', 'SOURCE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_distrikamoroniania_1.set('fieldLabels', {'DIST_PCODE': 'no label', 'DISTRICT_N': 'no label', 'BNGRC_D_CO': 'no label', 'BNGRC_DIST': 'no label', 'DIS_FKT': 'no label', 'REG_PCODE': 'no label', 'REGION_NAM': 'no label', 'BNGRC_R_CO': 'no label', 'BNGRC_REG_': 'no label', 'REG_FKT_SH': 'no label', 'C_PROV': 'no label', 'OLD_PROVIN': 'no label', 'NOTES': 'no label', 'OLD_DISTRI': 'no label', 'SOURCE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_fokotanyamoronimania_2.set('fieldLabels', {'P_CODE': 'no label', 'FOKONTANY_': 'no label', 'FKT_BNGRC_': 'no label', 'C_FKT_BNGR': 'no label', 'COM_PCODE': 'no label', 'C_CODE_BNG': 'no label', 'COMMUNE_NA': 'no label', 'BNGRC_COM_': 'no label', 'DIST_PCODE': 'no label', 'DISTRICT_N': 'no label', 'BNGRC_D_CO': 'no label', 'BNGRC_DIS_': 'no label', 'DIS_FKT': 'no label', 'REG_PCODE': 'inline label', 'REGION_NAM': 'inline label', 'BNGRC_R_CO': 'inline label', 'BNGRC_REG_': 'header label', 'REG_FKT_SH': 'inline label', 'PROV_CODE': 'header label', 'OLD_PROVIN': 'no label', 'MILIEU': 'no label', 'OLD_DISTRI': 'no label', 'SOURCE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'inline label', 'amoroniman': 'no label', });
lyr_point_lycee_3.set('fieldLabels', {'id': 'no label', 'nom_etab': 'no label', 'fokontany': 'no label', });
lyr_point_lycee_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});