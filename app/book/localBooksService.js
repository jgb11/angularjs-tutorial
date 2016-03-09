(function() {

  var localBooksService = function() {
    var _books = [{
      ID: 1,
      BookName: "Test Books 1",
      AuthorName: "Test Author 1",
      ISBN: "TEST1"
    }, {
      ID: 2,
      BookName: "Test Books 2",
      AuthorName: "Test Author 2",
      ISBN: "TEST2"
    }, {
      ID: 3,
      BookName: "Test Books 3",
      AuthorName: "Test Author 3",
      ISBN: "TEST3"
    }, {
      ID: 4,
      BookName: "Test Books 4",
      AuthorName: "Test Author 4",
      ISBN: "TEST4"
    }, {
      ID: 5,
      BookName: "Test Books 5",
      AuthorName: "Test Author 5",
      ISBN: "TEST5"
    }, {
      ID: 6,
      BookName: "Test Books 6",
      AuthorName: "Test Author 6",
      ISBN: "TEST6"
    }, {
      ID: 7,
      BookName: "Test Books 7",
      AuthorName: "Test Author 7",
      ISBN: "TEST7"
    }, {
      ID: 8,
      BookName: "Test Books 8",
      AuthorName: "Test Author 8",
      ISBN: "TEST8"
    }];

    // Just a temporary variable to mimic auto increment on client side
    var nextIdForBook = 9;

    var _addBook = function(book) {
      book.ID = nextIdForBook;
      nextIdForBook += 1;
      _books.push(book);
    }

    var _updateBook = function(book) {
      // A lame way of updating the book in the list
      for (var i = 0; i < _books.length; ++i) {
        if (_books[i].ID == book.ID) {
          _books[i] = book;
        }
      }
    }

    return {
      books: _books,
      addBook: _addBook,
      updateBook: _updateBook
    };
  }

  angular.module('myAngularApplication').factory('localBooksService', [localBooksService]);

}());
