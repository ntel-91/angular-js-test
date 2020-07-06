let app1 = angular.module('app1', [])

app1.controller('ctrl1', function($scope) {
    $scope.hi = 'this is interesting';
})


app1.controller('goodController', function($scope) {
    $scope.good = "good";
})

app1.controller('badController', function($scope) {
    $scope.bad = "bad";
})

app1.controller('groceryListController', function($scope) {
    $scope.groceries = [
        {item: "Banana", purchased: false},
        {item: "Apple", purchased: false},
        {item: "Orange", purchased: false}
    ];
})