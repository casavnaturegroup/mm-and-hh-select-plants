var wms_layers = [];

var format_codbeckareapolygon_0 = new ol.format.GeoJSON();
var features_codbeckareapolygon_0 = format_codbeckareapolygon_0.readFeatures(json_codbeckareapolygon_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_codbeckareapolygon_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_codbeckareapolygon_0.addFeatures(features_codbeckareapolygon_0);
var lyr_codbeckareapolygon_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_codbeckareapolygon_0, 
                style: style_codbeckareapolygon_0,
                popuplayertitle: 'cod beck area polygon',
                interactive: false,
                title: 'cod beck area polygon'
            });
var format_clippedwoodland_1 = new ol.format.GeoJSON();
var features_clippedwoodland_1 = format_clippedwoodland_1.readFeatures(json_clippedwoodland_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedwoodland_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedwoodland_1.addFeatures(features_clippedwoodland_1);
var lyr_clippedwoodland_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedwoodland_1, 
                style: style_clippedwoodland_1,
                popuplayertitle: 'clipped woodland',
                interactive: false,
                title: '<img src="styles/legend/clippedwoodland_1.png" /> clipped woodland'
            });
var format_clippedlocal_buildings_2 = new ol.format.GeoJSON();
var features_clippedlocal_buildings_2 = format_clippedlocal_buildings_2.readFeatures(json_clippedlocal_buildings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedlocal_buildings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedlocal_buildings_2.addFeatures(features_clippedlocal_buildings_2);
var lyr_clippedlocal_buildings_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedlocal_buildings_2, 
                style: style_clippedlocal_buildings_2,
                popuplayertitle: 'clipped local_buildings',
                interactive: false,
                title: '<img src="styles/legend/clippedlocal_buildings_2.png" /> clipped local_buildings'
            });
var format_clippedsurface_water_3 = new ol.format.GeoJSON();
var features_clippedsurface_water_3 = format_clippedsurface_water_3.readFeatures(json_clippedsurface_water_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedsurface_water_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedsurface_water_3.addFeatures(features_clippedsurface_water_3);
var lyr_clippedsurface_water_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedsurface_water_3, 
                style: style_clippedsurface_water_3,
                popuplayertitle: 'clipped surface_water',
                interactive: false,
                title: '<img src="styles/legend/clippedsurface_water_3.png" /> clipped surface_water'
            });
var format_uppercode_beck_area_4 = new ol.format.GeoJSON();
var features_uppercode_beck_area_4 = format_uppercode_beck_area_4.readFeatures(json_uppercode_beck_area_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uppercode_beck_area_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uppercode_beck_area_4.addFeatures(features_uppercode_beck_area_4);
var lyr_uppercode_beck_area_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_uppercode_beck_area_4, 
                style: style_uppercode_beck_area_4,
                popuplayertitle: 'upper code_beck_area',
                interactive: false,
                title: 'upper code_beck_area'
            });
var format_clippedlocal_roads_5 = new ol.format.GeoJSON();
var features_clippedlocal_roads_5 = format_clippedlocal_roads_5.readFeatures(json_clippedlocal_roads_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedlocal_roads_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedlocal_roads_5.addFeatures(features_clippedlocal_roads_5);
var lyr_clippedlocal_roads_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedlocal_roads_5, 
                style: style_clippedlocal_roads_5,
                popuplayertitle: 'clipped local_roads',
                interactive: false,
                title: '<img src="styles/legend/clippedlocal_roads_5.png" /> clipped local_roads'
            });
var format_clippedwaterlines_6 = new ol.format.GeoJSON();
var features_clippedwaterlines_6 = format_clippedwaterlines_6.readFeatures(json_clippedwaterlines_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedwaterlines_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedwaterlines_6.addFeatures(features_clippedwaterlines_6);
var lyr_clippedwaterlines_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedwaterlines_6, 
                style: style_clippedwaterlines_6,
                popuplayertitle: 'clipped waterlines',
                interactive: false,
                title: '<img src="styles/legend/clippedwaterlines_6.png" /> clipped waterlines'
            });
var format_clippednames_7 = new ol.format.GeoJSON();
var features_clippednames_7 = format_clippednames_7.readFeatures(json_clippednames_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippednames_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippednames_7.addFeatures(features_clippednames_7);
var lyr_clippednames_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippednames_7, 
                style: style_clippednames_7,
                popuplayertitle: 'clipped names',
                interactive: false,
                title: 'clipped names'
            });
var format_clippedcontours_8 = new ol.format.GeoJSON();
var features_clippedcontours_8 = format_clippedcontours_8.readFeatures(json_clippedcontours_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedcontours_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedcontours_8.addFeatures(features_clippedcontours_8);
var lyr_clippedcontours_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedcontours_8, 
                style: style_clippedcontours_8,
                popuplayertitle: 'clipped contours',
                interactive: false,
                title: '<img src="styles/legend/clippedcontours_8.png" /> clipped contours'
            });
var format_ScarthwoodMoorbogplantsconverted_9 = new ol.format.GeoJSON();
var features_ScarthwoodMoorbogplantsconverted_9 = format_ScarthwoodMoorbogplantsconverted_9.readFeatures(json_ScarthwoodMoorbogplantsconverted_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ScarthwoodMoorbogplantsconverted_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ScarthwoodMoorbogplantsconverted_9.addFeatures(features_ScarthwoodMoorbogplantsconverted_9);
var lyr_ScarthwoodMoorbogplantsconverted_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ScarthwoodMoorbogplantsconverted_9, 
                style: style_ScarthwoodMoorbogplantsconverted_9,
                popuplayertitle: 'Scarthwood Moor bog plants converted',
                interactive: true,
    title: 'Scarthwood Moor bog plants converted<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_0.png" /> Achillea millefolium<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_1.png" /> Achillea ptarmica<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_2.png" /> Agrostis canina<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_3.png" /> Agrostis capillaris<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_4.png" /> Agrostis sp.<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_5.png" /> Agrostis stolonifera<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_6.png" /> Ajuga reptans<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_7.png" /> Anagallis tenella<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_8.png" /> Angelica sylvestris<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_9.png" /> Anthoxanthum odoratum<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_10.png" /> Athyrium filix-femina<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_11.png" /> Bellis perennis<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_12.png" /> Blechnum spicant<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_13.png" /> Briza media<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_14.png" /> Callitriche agg.<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_15.png" /> Calluna vulgaris<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_16.png" /> Campanula rotundifolia<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_17.png" /> Cardamine flexuosa<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_18.png" /> Cardamine pratensis<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_19.png" /> Carex demissa<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_20.png" /> Carex dioica<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_21.png" /> Carex echinata<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_22.png" /> Carex flacca<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_23.png" /> Carex hostiana<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_24.png" /> Carex leporina<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_25.png" /> Carex nigra<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_26.png" /> Carex panicea<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_27.png" /> Carex pulicaris<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_28.png" /> Carex remota<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_29.png" /> Carex rostrata<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_30.png" /> Carex sp.<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_31.png" /> Carex spicata<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_32.png" /> Cerastium fontanum<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_33.png" /> Ceratocapnos claviculata<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_34.png" /> Chrysosplenium oppositifolium<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_35.png" /> Circaea lutetiana<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_36.png" /> Cirsium arvense<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_37.png" /> Cirsium palustre<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_38.png" /> Comarum palustre<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_39.png" /> Crataegus monogyna<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_40.png" /> Crepis paludosa<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_41.png" /> Cynosurus cristatus<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_42.png" /> Dactylorhiza fuchsii<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_43.png" /> Danthonia decumbans<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_44.png" /> Deschampsia cespitosa<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_45.png" /> Deschampsia flexuosa<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_46.png" /> Digitalis purpurea<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_47.png" /> Drosera rotundifolia<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_48.png" /> Dryopteris dilatata<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_49.png" /> Eleocharis quinqueflora<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_50.png" /> Empetrum nigrum<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_51.png" /> Epilobium palustre<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_52.png" /> Epilobium sp.<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_53.png" /> Equisetum arvense<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_54.png" /> Equisetum fluviatile<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_55.png" /> Erica cinerea<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_56.png" /> Erica tetralix<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_57.png" /> Eriophorum angustifolium<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_58.png" /> Eriophorum vaginatum<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_59.png" /> Festuca ovina agg.<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_60.png" /> Festuca rubra<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_61.png" /> Filipendula ulmaria<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_62.png" /> Galium aparine<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_63.png" /> Galium palustre<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_64.png" /> Galium saxatile<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_65.png" /> Galium uliginosum<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_66.png" /> Geranium robertianum<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_67.png" /> Geum urbanum<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_68.png" /> Glyceria sp.<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_69.png" /> Holcus lanatus<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_70.png" /> Holcus mollis<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_71.png" /> Hydrocotyle vulgaris<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_72.png" /> Hypericum pulchrum<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_73.png" /> Ilex aquifolium<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_74.png" /> Juncus acutiflorus<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_75.png" /> Juncus articulatus<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_76.png" /> Juncus bufonius<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_77.png" /> Juncus bulbosus<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_78.png" /> Juncus conglomeratus<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_79.png" /> Juncus effusus<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_80.png" /> Juncus inflexus<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_81.png" /> Juncus squarrosus<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_82.png" /> Lapsana communis<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_83.png" /> Lathyrus linifolius<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_84.png" /> Lathyrus pratensis<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_85.png" /> Lemna minuta<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_86.png" /> Lotus pedunculatus<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_87.png" /> Luzula multiflora<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_88.png" /> Luzula multiflora subsp. congesta<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_89.png" /> Lysimachia nemorum<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_90.png" /> Mentha aquatica<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_91.png" /> Menyanthes trifoliata<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_92.png" /> Molinia caerulea<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_93.png" /> Myosotis secunda<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_94.png" /> Nardus stricta<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_95.png" /> Narthecium ossifragum<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_96.png" /> Nasturtium officinale<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_97.png" /> Oreopteris limbosperma<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_98.png" /> Oxalis acetosella<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_99.png" /> Pedicularis sylvatica<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_100.png" /> Poa pratensis<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_101.png" /> Poa trivialis<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_102.png" /> Polygala serpyllifolia<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_103.png" /> Polytrichum commune<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_104.png" /> Potamogeton polygonifolius<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_105.png" /> Potentilla anserina<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_106.png" /> Potentilla erecta<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_107.png" /> Potentilla reptans<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_108.png" /> Prunella vulgaris<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_109.png" /> Pteridium aquilinum<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_110.png" /> Ranunculus acris<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_111.png" /> Ranunculus flammula<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_112.png" /> Ranunculus repens<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_113.png" /> Rhytidiadelphus squarrosus<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_114.png" /> Rubus fruticosus agg.<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_115.png" /> Rubus idaeus<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_116.png" /> Rumex acetosa<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_117.png" /> Rumex acetosella<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_118.png" /> Rumex obtusifolius<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_119.png" /> Rumex sp.<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_120.png" /> Salix caprea<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_121.png" /> Salix cinerea<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_122.png" /> Salix sp.<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_123.png" /> Schedonorus arundinaceus<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_124.png" /> Scrophularia nodosa<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_125.png" /> Senecio aquaticus<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_126.png" /> Silene flos-cuculi<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_127.png" /> Sorbus aucuparia<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_128.png" /> Sphagnum spp.<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_129.png" /> Stachys sylvatica<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_130.png" /> Stellaria alsine<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_131.png" /> Stellaria graminea<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_132.png" /> Stellaria holostea<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_133.png" /> Succisa pratensis<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_134.png" /> Taraxacum agg.<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_135.png" /> Torilis japonica<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_136.png" /> Trichophorum cespitosum s.l.<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_137.png" /> Trichophorum germanicum agg.<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_138.png" /> Trifolium dubium<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_139.png" /> Trifolium pratense<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_140.png" /> Trifolium repens<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_141.png" /> Triglochin palustris<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_142.png" /> Ulex europaeus<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_143.png" /> Urtica dioica<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_144.png" /> Vaccinium myrtillus<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_145.png" /> Valeriana dioica<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_146.png" /> Valeriana officinalis<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_147.png" /> Veronica beccabunga<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_148.png" /> Veronica officinalis<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_149.png" /> Veronica scutellata<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_150.png" /> Vicia sepium<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_151.png" /> Viola palustris<br />\
    <img src="styles/legend/ScarthwoodMoorbogplantsconverted_9_152.png" /> Viola sp.<br />' });

lyr_codbeckareapolygon_0.setVisible(true);lyr_clippedwoodland_1.setVisible(true);lyr_clippedlocal_buildings_2.setVisible(true);lyr_clippedsurface_water_3.setVisible(true);lyr_uppercode_beck_area_4.setVisible(true);lyr_clippedlocal_roads_5.setVisible(true);lyr_clippedwaterlines_6.setVisible(true);lyr_clippednames_7.setVisible(true);lyr_clippedcontours_8.setVisible(true);lyr_ScarthwoodMoorbogplantsconverted_9.setVisible(true);
var layersList = [lyr_codbeckareapolygon_0,lyr_clippedwoodland_1,lyr_clippedlocal_buildings_2,lyr_clippedsurface_water_3,lyr_uppercode_beck_area_4,lyr_clippedlocal_roads_5,lyr_clippedwaterlines_6,lyr_clippednames_7,lyr_clippedcontours_8,lyr_ScarthwoodMoorbogplantsconverted_9];
lyr_codbeckareapolygon_0.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_clippedwoodland_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', });
lyr_clippedlocal_buildings_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'uuid': 'uuid', });
lyr_clippedsurface_water_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', });
lyr_uppercode_beck_area_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_clippedlocal_roads_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', 'name': 'name', 'number': 'number', 'level': 'level', });
lyr_clippedwaterlines_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', });
lyr_clippednames_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', 'name1': 'name1', 'name1language': 'name1language', 'name2': 'name2', 'name2language': 'name2language', });
lyr_clippedcontours_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', 'height': 'height', });
lyr_ScarthwoodMoorbogplantsconverted_9.set('fieldAliases', {'Main Area': 'Main Area', 'Sub-area': 'Sub-area', 'Date': 'Date', 'OS Location': 'OS Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Scientific Name': 'Scientific Name', 'Common Name': 'Common Name', 'Comments': 'Comments', });
lyr_codbeckareapolygon_0.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_clippedwoodland_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', });
lyr_clippedlocal_buildings_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'uuid': 'TextEdit', });
lyr_clippedsurface_water_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', });
lyr_uppercode_beck_area_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_clippedlocal_roads_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'number': 'TextEdit', 'level': 'Range', });
lyr_clippedwaterlines_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', });
lyr_clippednames_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', 'name1': 'TextEdit', 'name1language': 'TextEdit', 'name2': 'TextEdit', 'name2language': 'TextEdit', });
lyr_clippedcontours_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', 'height': 'TextEdit', });
lyr_ScarthwoodMoorbogplantsconverted_9.set('fieldImages', {'Main Area': 'TextEdit', 'Sub-area': 'TextEdit', 'Date': 'Hidden', 'OS Location': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Scientific Name': 'Hidden', 'Common Name': 'TextEdit', 'Comments': 'Hidden', });
lyr_codbeckareapolygon_0.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_clippedwoodland_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', });
lyr_clippedlocal_buildings_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'uuid': 'no label', });
lyr_clippedsurface_water_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', });
lyr_uppercode_beck_area_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_clippedlocal_roads_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', 'name': 'no label', 'number': 'no label', 'level': 'no label', });
lyr_clippedwaterlines_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', });
lyr_clippednames_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', 'name1': 'no label', 'name1language': 'no label', 'name2': 'no label', 'name2language': 'no label', });
lyr_clippedcontours_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'no label', 'height': 'no label', });
lyr_ScarthwoodMoorbogplantsconverted_9.set('fieldLabels', {'Main Area': 'inline label - visible with data', 'Sub-area': 'inline label - visible with data', 'Common Name': 'inline label - visible with data', });
lyr_ScarthwoodMoorbogplantsconverted_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});