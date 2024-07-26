/*
4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.
*/

const books = [
    { author: 'Paulo Coelho', year: 1988 },
    { author: 'Benjamin Hoff', year: 1982 },
    { author: 'Harper Lee', year: 1960 },
    { author: 'John Green', year: 2013 },
    { author: 'Spencer Johnson', year: 2015 },
];

const newArr = (books.filter((book) => book.year < 2010)).map((book) => {
    return {
        author : book.author.toUpperCase(),
        year : book.year
    }
})

console.log(newArr)