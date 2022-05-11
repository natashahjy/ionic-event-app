angular.module('app.controllers', [])

.controller('eventSearchCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.countries = ["Hong Kong", "Tokyo", "Paris"];
    $scope.selected = $scope.countries[1];
}])
   
.controller('scheduleCtrl', ['$scope', '$stateParams', 'eventService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, eventService) {

    var country = $stateParams.country;
    
    $scope.event = []; // empty array
    
    eventService.getByCountry(country).then(function(result){
        $scope.events = result;
    });
    
    
    /*
    eventService.get(__________).then(function(result)){
                              $scope.event = result;
                              });
    $scope.events = []; // empty array
    eventService.getByCountry("__________").then(function(result){
        $scope.events = result;
    });
    */
}])
 