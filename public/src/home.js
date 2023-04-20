function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let total = 0;

  for ( let i = 0; i < books.length; i++ ) {
      const book = books[i];

      if (book.borrows[0].returned === false) {
          total += 1;
      }
  }
  
  return total;
}

function getMostCommonGenres(books) {  
  const genres = books.map((book) => book.genre);
  const topFive = [];

  genres.map((genre) => {
    const location = topFive.findIndex((element) => element.name === genre);
    if (location >= 0) {
      topFive[location].count = topFive[location].count += 1;
    } else {
      topFive.push({name: genre, count: 1});
    }
  });

// sort the result
  topFive.sort((a,b) => b.count - a.count);
  if (topFive.length > 5) {
    return topFive.slice(0, 5);
  }
}

function getMostPopularBooks(books) {
  const nameCount = [];

  for (let i = 0; i < books.length; i++ ) {
      let book = books[i];
      let bookTitle = book.title;
      let borrowCount = book.borrows.length;
      nameCount.push({name: bookTitle, count: borrowCount})
    }
  
  nameCount.sort((bookA, bookB) => bookB.count - bookA.count);

  return nameCount.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let authorList = books.reduce((list, { authorId, borrows }) => {
    const authorIndex = list.findIndex(({ name }) => name == authorId);
    if (authorIndex > -1) {
        list[authorIndex].count += borrows.length;
    } else {
        list.push({ id: authorId, count: borrows.length })
    }
    return list
}, [])

authorList = authorList.map(({ id, count }) => {
    const { name } = findAuthorById(authors, id);
    const authorName = `${name.first} ${name.last}`
    return { name: authorName, count }
})
return topFiveByCount(authorList)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
