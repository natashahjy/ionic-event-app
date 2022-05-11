angular.module('app.services', [])

/**********************
Event Service
***********************/
.factory('eventService', ['$http', 
         function($http){
            var eventArray = [];
         
            return {
         
            get: function(id){
                eventArray = [];
                return $http.get('events.json').then(function (response) {
                    eventArray = response.data;
                    for (var i = 0; i < eventArray.lenth; i++){
                        if(eventArray[i].id == id){
                            return eventArray[i]
                        }
                    }
                    return null;
                });
            },
                
            getByCountry: function(country) {
                return $http.get('events.json').then(function (response) {
                    eventArray = response.data;
                    var result = [];
                    for(var i = 0; i < eventArray.length; i++) {
                        if(eventArray[i].country == country) {
                            result.push(eventArray[i]);
                        }
                    }
                    return result;
                });
            },
                
            }
        }])
.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);