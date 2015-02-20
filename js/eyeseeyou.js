function initialize() {
        var cenLatLng = new google.maps.LatLng(40.7142, -74.0064)
        var myOptions = {
          zoom: 12,
          center: cenLatLng,
          mapTypeId: google.maps.MapTypeId.HYBRID
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            myOptions);
        
        
  
  var myLatlng1 = new google.maps.LatLng(40.768891,-73.981901);
  var marker1 = new google.maps.Marker({
      position: myLatlng1,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage1 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Subway_A_59th.gif" />' + '</div>';
 
var infowindow = new google.maps.InfoWindow({
    content: srcimage1,
    width:200,
    height:150
});

infowindow.open(map.marker1);


google.maps.event.addListener(marker1, 'click', function() {
  infowindow.open(map,marker1);
});

 var myLatlng2 = new google.maps.LatLng(40.805981,-73.953974);
  var marker2 = new google.maps.Marker({
      position: myLatlng2,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage2 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Subway_A_Makeup.gif" />' + '</div>';
 
var infowindow2 = new google.maps.InfoWindow({
    content: srcimage2,
    width:200,
    height:150
});

infowindow2.open(map.marker2);


google.maps.event.addListener(marker2, 'click', function() {
  infowindow2.open(map,marker2);
});

var myLatlng3 = new google.maps.LatLng(40.808125,-73.952537);
  var marker3 = new google.maps.Marker({
      position: myLatlng3,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage3 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Subway_A_Singing.gif" />' + '</div>';
 
var infowindow3 = new google.maps.InfoWindow({
    content: srcimage3,
    width:200,
    height:150
});

infowindow3.open(map.marker3);


google.maps.event.addListener(marker3, 'click', function() {
  infowindow3.open(map,marker3);
});

var myLatlng4 = new google.maps.LatLng(40.763934,-73.98483);
  var marker4 = new google.maps.Marker({
      position: myLatlng4,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage4 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Subway_A_Trainpassing.gif" />' + '</div>';
 
var infowindow4 = new google.maps.InfoWindow({
    content: srcimage4,
    width:200,
    height:150
});

infowindow4.open(map.marker4);


google.maps.event.addListener(marker4, 'click', function() {
  infowindow4.open(map,marker4);
});


var myLatlng5 = new google.maps.LatLng(40.762248,-73.986166);
  var marker5 = new google.maps.Marker({
      position: myLatlng5,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage5 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Subway_A_Trainpassing2.gif" />' + '</div>';
 
var infowindow5 = new google.maps.InfoWindow({
    content: srcimage5,
    width:200,
    height:150
});

infowindow5.open(map.marker5);


google.maps.event.addListener(marker5, 'click', function() {
  infowindow5.open(map,marker5);
});


var myLatlng6 = new google.maps.LatLng(40.730665,-73.990484);
  var marker6 = new google.maps.Marker({
      position: myLatlng6,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage6 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Subway_4_Trainpassing2.gif" />' + '</div>';
 
var infowindow6 = new google.maps.InfoWindow({
    content: srcimage6,
    width:200,
    height:150
});

infowindow6.open(map.marker6);


google.maps.event.addListener(marker6, 'click', function() {
  infowindow6.open(map,marker6);
});



var myLatlng7 = new google.maps.LatLng(40.694696,-73.906231);
  var marker7 = new google.maps.Marker({
      position: myLatlng7,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage7 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Bushwick_Street_Behinds.gif" />' + '</div>';
 
var infowindow7 = new google.maps.InfoWindow({
    content: srcimage7,
    width:200,
    height:150
});

infowindow7.open(map.marker7);


google.maps.event.addListener(marker7, 'click', function() {
  infowindow7.open(map,marker7);
});

var myLatlng8 = new google.maps.LatLng(40.73321,-73.987212);
  var marker8 = new google.maps.Marker({
      position: myLatlng8,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage8 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/EastVillage_Street_Cop.gif" />' + '</div>';
 
var infowindow8 = new google.maps.InfoWindow({
    content: srcimage8,
    width:200,
    height:150
});

infowindow8.open(map.marker8);


google.maps.event.addListener(marker8, 'click', function() {
  infowindow8.open(map,marker8);
});


var myLatlng9 = new google.maps.LatLng(40.749878,-73.987834);
  var marker9 = new google.maps.Marker({
      position: myLatlng9,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage9 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/HeraldSq_EmpireStateBuilding_1.gif" />' + '</div>';
 
var infowindow9 = new google.maps.InfoWindow({
    content: srcimage9,
    width:200,
    height:150
});

infowindow9.open(map.marker9);


google.maps.event.addListener(marker9, 'click', function() {
  infowindow9.open(map,marker9);
});

var myLatlng10 = new google.maps.LatLng(40.751061,-73.989803);
  var marker10 = new google.maps.Marker({
      position: myLatlng10,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage10 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Macys_escalator.gif" />' + '</div>';
 
var infowindow10 = new google.maps.InfoWindow({
    content: srcimage10,
    width:200,
    height:150
});

infowindow10.open(map.marker10);


google.maps.event.addListener(marker10, 'click', function() {
  infowindow10.open(map,marker10);
});

var myLatlng11 = new google.maps.LatLng(40.726608,-73.995881);
  var marker11 = new google.maps.Marker({
      position: myLatlng11,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage11 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Soho_Street_Tuck.gif" />' + '</div>';
 
var infowindow11 = new google.maps.InfoWindow({
    content: srcimage11,
    width:200,
    height:150
});

infowindow11.open(map.marker11);


google.maps.event.addListener(marker11, 'click', function() {
  infowindow11.open(map,marker11);
});
  
  
var myLatlng12 = new google.maps.LatLng(40.738779,-73.987362);
  var marker12 = new google.maps.Marker({
      position: myLatlng12,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage12 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Subway_4_Trainpassing1.gif" />' + '</div>';
 
var infowindow12 = new google.maps.InfoWindow({
    content: srcimage12,
    width:200,
    height:150
});

infowindow12.open(map.marker12);


google.maps.event.addListener(marker12, 'click', function() {
  infowindow12.open(map,marker12);
});

var myLatlng13 = new google.maps.LatLng(40.734836,-73.990324);
  var marker13 = new google.maps.Marker({
      position: myLatlng13,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage13 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Subway_4_Unloading.gif" />' + '</div>';
 
var infowindow13 = new google.maps.InfoWindow({
    content: srcimage13,
    width:200,
    height:150
});

infowindow13.open(map.marker13);


google.maps.event.addListener(marker13, 'click', function() {
  infowindow13.open(map,marker13);
});
  
var myLatlng14 = new google.maps.LatLng(40.739519,-74.002233);
  var marker14 = new google.maps.Marker({
      position: myLatlng14,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage14 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Subway_A_Gingergirl.gif" />' + '</div>';
 
var infowindow14 = new google.maps.InfoWindow({
    content: srcimage14,
    width:200,
    height:150
});

infowindow14.open(map.marker14);


google.maps.event.addListener(marker14, 'click', function() {
  infowindow14.open(map,marker14);
});

var myLatlng15 = new google.maps.LatLng(40.747257,-73.99704);
  var marker15 = new google.maps.Marker({
      position: myLatlng15,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage15 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Subway_A_Kids.gif" />' + '</div>';
 
var infowindow15 = new google.maps.InfoWindow({
    content: srcimage15,
    width:200,
    height:150
});

infowindow15.open(map.marker15);


google.maps.event.addListener(marker15, 'click', function() {
  infowindow15.open(map,marker15);
});
  
var myLatlng16 = new google.maps.LatLng(40.732267,-74.00043);
  var marker16 = new google.maps.Marker({
      position: myLatlng16,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage16 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Subway_A_W4.gif" />' + '</div>';
 
var infowindow16 = new google.maps.InfoWindow({
    content: srcimage16,
    width:200,
    height:150
});

infowindow16.open(map.marker16);


google.maps.event.addListener(marker16, 'click', function() {
  infowindow16.open(map,marker16);
});
  
  
var myLatlng17 = new google.maps.LatLng(40.69564,-73.9043);
  var marker17 = new google.maps.Marker({
      position: myLatlng17,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage17 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Subway_L_Cop.gif" />' + '</div>';
 
var infowindow17 = new google.maps.InfoWindow({
    content: srcimage17,
    width:200,
    height:150
});

infowindow17.open(map.marker17);


google.maps.event.addListener(marker17, 'click', function() {
  infowindow17.open(map,marker17);
});


var myLatlng18 = new google.maps.LatLng(40.717762,-73.957686);
  var marker18 = new google.maps.Marker({
      position: myLatlng18,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage18 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Subway_L_Girls.gif" />' + '</div>';
 
var infowindow18 = new google.maps.InfoWindow({
    content: srcimage18,
    width:200,
    height:150
});

infowindow18.open(map.marker18);


google.maps.event.addListener(marker18, 'click', function() {
  infowindow18.open(map,marker18);
});


var myLatlng19 = new google.maps.LatLng(40.697689,-73.928504);
  var marker19 = new google.maps.Marker({
      position: myLatlng19,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage19 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Subway_M_BushwickGraffiti1.gif" />' + '</div>';
 
var infowindow19 = new google.maps.InfoWindow({
    content: srcimage19,
    width:200,
    height:150
});

infowindow19.open(map.marker19);


google.maps.event.addListener(marker19, 'click', function() {
  infowindow19.open(map,marker19);
});


var myLatlng20 = new google.maps.LatLng(40.697234,-73.93271);
  var marker20 = new google.maps.Marker({
      position: myLatlng20,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage20 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Subway_M_BushwickGraffiti2.gif" />' + '</div>';
 
var infowindow20 = new google.maps.InfoWindow({
    content: srcimage20,
    width:200,
    height:150
});

infowindow20.open(map.marker20);


google.maps.event.addListener(marker20, 'click', function() {
  infowindow20.open(map,marker20);
});

var myLatlng21 = new google.maps.LatLng(40.697104,-73.935456);
  var marker21 = new google.maps.Marker({
      position: myLatlng21,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage21 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/Subway_M_BushwickGraffiti3.gif" />' + '</div>';
 
var infowindow21 = new google.maps.InfoWindow({
    content: srcimage21,
    width:200,
    height:150
});

infowindow21.open(map.marker21);


google.maps.event.addListener(marker21, 'click', function() {
  infowindow21.open(map,marker21);
});

var myLatlng22 = new google.maps.LatLng(40.756742,-73.986204);
  var marker22 = new google.maps.Marker({
      position: myLatlng22,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage22 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/TimesSq_Cookiemonster.gif" />' + '</div>';
 
var infowindow22 = new google.maps.InfoWindow({
    content: srcimage22,
    width:200,
    height:150
});

infowindow22.open(map.marker22);


google.maps.event.addListener(marker22, 'click', function() {
  infowindow22.open(map,marker22);
});

var myLatlng23 = new google.maps.LatLng(40.7336,-73.989841);
  var marker23 = new google.maps.Marker({
      position: myLatlng23,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage23 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/UnionSq_Street_AmberRose.gif" />' + '</div>';
 
var infowindow23 = new google.maps.InfoWindow({
    content: srcimage23,
    width:200,
    height:150
});

infowindow23.open(map.marker23);


google.maps.event.addListener(marker23, 'click', function() {
  infowindow23.open(map,marker23);
});

var myLatlng24 = new google.maps.LatLng(40.731153,-74.001524);
  var marker24 = new google.maps.Marker({
      position: myLatlng24,
      map: map,
      title:"EYESEEYOU!"
  });
  
var srcimage24 = '<div>' + '<img src="http://sites.bxmc.poly.edu/~jasonwilson/eyeseeyou/assets/WestVillage_Street_Tattoo.gif" />' + '</div>';
 
var infowindow24 = new google.maps.InfoWindow({
    content: srcimage24,
    width:200,
    height:150
});

infowindow24.open(map.marker24);


google.maps.event.addListener(marker24, 'click', function() {
  infowindow24.open(map,marker24);
});
  
}