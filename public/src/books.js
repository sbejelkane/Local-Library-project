function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++) {
    if (authors[i].id === id) {
        return authors[i];
    }
  }
}

function findBookById(books, id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
        return books[i];
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  const notReturned = [];
    const returned = [];
    
    for (let i = 0; i < books.length; i++) {
        let book = books[i]
        if (book.borrows[0].returned === false) {
            notReturned.push(book);
        } else {
            returned.push(book);
        }
    }
    const booksPartitioned = [notReturned, returned];
    return booksPartitioned;
}

function getBorrowersForBook(book, accounts) {
  const result = book.borrows.map(borrower => { 
    const result = accounts.find(account => borrower.id === account.id )
    result.returned = borrower.returned;
    return result;
   })
   return result.filter((borrower, index)=> result.findIndex(item => item.id === borrower.id) === index);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
