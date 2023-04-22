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

function helper(accounts, borrowList, borrowers) {
  accounts.forEach(account => {
      borrowList.forEach(({ id, returned }) => {
          if (id == account.id) borrowers.push({ ...account, returned })
      })
  })  
  return borrowers.slice(0, 10);  
}  

function getBorrowersForBook(book, accounts) {
  const { borrows: borrowList } = book
  let borrowers = []
  let result = helper(accounts, borrowList, borrowers);
//  console.log("result", result);
  return result
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
