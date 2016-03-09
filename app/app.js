(function(){
    myModule = angular.module('myAngularApplication', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when("/", {
            templateUrl: "pages/books.html",
            controller: "booksController"
        })
        .when("/books", {
            templateUrl: "pages/books.html",
            controller: "booksController"
        })
        .when("/angular-tests", {
            templateUrl: "pages/angular-tests.html",
            controller: "testController"
        }).
        otherwise({
            redirect: '/'
        });
    }]);
}());

angular.module('myAngularApplication').filter('power', function () {

    return function (input, powerValue) {

        // Check if power value is falsy
        if (!powerValue) {
            powerValue = 1;
        }

        // Use Math.pow to find the power and return it
        return Math.pow(input, powerValue);
    }
});
