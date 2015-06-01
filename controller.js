var myApp = angular.module("myForm", []);
myApp.controller('FormController', function($scope) {
$scope.category = [
            {name:'black', shade:'dark'},
            {name:'white', shade:'light'},
            {name:'red', shade:'dark'},
            {name:'blue', shade:'dark'},
            {name:'yellow', shade:'light'}
        ];
         $scope.color = $scope.category[2];
});