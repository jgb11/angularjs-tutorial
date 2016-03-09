(function() {

  var booksController = function($scope, $filter, localBooksService, remoteBooksService) {
    $scope.message = "Hello from booksController";

    this.greeting = "This is a greeting message using controller as syntax";

    $scope.quantity = 200;
    $scope.date = Date.now();
    $scope.amount = 123.76846534;

    $scope.conversionRate = $filter("number")($scope.amount, 5);

    $scope.books = [];
    $scope.book = {};
    $scope.editBook = null;

    $scope.fetchBooks = function() {
      $scope.books = localBooksService.books;
    }

    $scope.removeBooks = function() {
      $scope.books = [];
    }

    $scope.addBook = function(formAddbook) {
      if (formAddbook.$valid) {
        $scope.formAddbook.$setUntouched();
        localBooksService.addBook($scope.book);
        $scope.book = {}
        $scope.fetchBooks();
      } else {
        alert("Invalid values. All values are required");
      }
    }

    $scope.updateBook = function(formEditBook) {
      if (formEditBook.$valid) {
        $scope.formEditBook.$setUntouched()
        localBooksService.updateBook($scope.editBook);
        $scope.editBook = null;
        $scope.fetchBooks();;
      } else {
        alert("Invalid values. All values are required");
      }
    }

    $scope.setEditBook = function(selected) {
      $scope.editBook = angular.copy(selected);
      $scope.book = {}
    }

    $scope.cancelEdit = function() {
      $scope.editBook = null;
      $scope.book = {}
    }

    $scope.fetchBooksFromServer = function() {

      remoteBooksService.fetchBooks()
        .success(function(data, status, headers, config) {
          $scope.books = data;
        })
        .error(function(data, status, headers, config) {
          $scope.books = [];
          $scope.error = "Failed to retrieved items from server";
        });
    };

    $scope.fetchBooks();

    $scope.countries = [
      "India",
      "Denmark",
      "USA",
      "Singapore",
      "Germany"
    ];
  }

  angular.module('myAngularApplication').controller('booksController', ["$scope", "$filter", "localBooksService", "remoteBooksService", booksController]);

}());
