function findBookIndex(books, searchTitle) {
  let left = 0;
  let right = books.length - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let Title = books[mid].title;
      if (Title === searchTitle) {
          return mid; 
      } else if (Title < searchTitle) {
          left = mid + 1; 
  } else {
          right = mid - 1;
      }
  }
  return -1; 
}

let books=[
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" }
];
console.log(findBookIndex(books, 'Gone with the Wind'))
console.log(findBookIndex(books, 'The Master Mind'))
