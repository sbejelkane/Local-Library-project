function findAccountById(accounts, id) {
  let result = accounts.find((account) => {
    return account.id === id;
  })
  return result;
}

function sortAccountsByLastName(accounts) {
  const sortLast = accounts.sort((accountA, accountB) => 
    accountA.name.last > accountB.name.last ? 1 : -1 );

  return sortLast;
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;

  for ( let i = 0; i < books.length; i++) {
    const book = books[i];
    for ( let j = 0; j < book.borrows.length; j++) {
      if (book.borrows[j].id === account.id) {
        total += 1;
      }
    }
  }
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows.some(acc => acc.id === account.id && acc.returned === false))
      .map(book => { const author = authors.find(author => author.id === book.authorId)
        book.author = author; 
        return book;         
   })  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
}
