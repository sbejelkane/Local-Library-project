function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++) {
    if (authors[i].id === id) {
        return authors[i];
    }
  }
}

function findBookById(books, id) {
  return books.find(({ id: bookID }) => id == bookID)
}

//helper function
const notReturned = [];
const returned = [];
const booksPartitioned = [notReturned, returned];

function pushToAnArray(item) {
	if (item === false) {
		notReturned.push(item);
	} else {
		returned.push(item);
	};
}

function partitionBooksByBorrowedStatus(books) {
    for (let i = 0; i < books.length; i++) {
        let book = books[i]
        pushToAnArray(book);
      }
    return booksPartitioned; 
  }

function getBorrowersForBook(book, accounts) {
  const { borrows: borrowList } = book
  let borrowers = []

  accounts.forEach(account => {
      borrowList.forEach(({ id, returned }) => {
          if (id == account.id) borrowers.push({ ...account, returned })
      })
  })
  return borrowers.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
