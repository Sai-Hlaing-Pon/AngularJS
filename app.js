var myApp= angular.module('myApp', ['ngRoute']);
myApp.controller('myController', ['$scope', '$filter', function($scope, filter) {

    $scope.decimal="";
    $scope.binary="";
    $scope.octal="";
    $scope.hexa="";

    $scope.$watch('decimal', function(newValue, oldValue) {
        $scope.binary=parseInt(newValue, 10).toString(2);
        $scope.octal=parseInt(newValue, 10).toString(8);
        $scope.hexa=parseInt(newValue, 10).toString(16).toUpperCase();

        
    });

}]);
     
