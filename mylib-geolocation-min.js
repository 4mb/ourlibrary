var API;if(API&&API.isHostObjectProperty&&API.isHostObjectProperty(window,"navigator")&&API.isHostObjectProperty(window.navigator,"geolocation")&&API.isHostMethod(window.navigator.geolocation,"getCurrentPosition")){(function(){var B;function A(C,E,D){E.call(D||API,{latitude:C.coords.latitude,longitude:C.coords.longitude},C)}API.getGeoLocation=function(D,C){if(B){A(B,D,C)}else{window.navigator.geolocation.getCurrentPosition(function(E){B=E;A(E,D,C)})}}})()}