(function() {

  var remoteBooksService = function($http) {
    var _fetchBooks = function() {
      return $http.get('./app/book/books.json');
    };

    return {
      fetchBooks: _fetchBooks
    };
  }

  angular.module('myAngularApplication').factory('remoteBooksService', ["$http", remoteBooksService]);

}());
