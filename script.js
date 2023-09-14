
const library = [
    {
        author: "Author 1",
        title: "Book 1",
        readingStatus: true
    },
    {
        author: "Author 2",
        title: "Book 2",
        readingStatus: false
    },
    {
        author: "Author 3",
        title: "Book 3",
        readingStatus: true
    }
];

const numberOfReadBooks = numberOfBooksRead(library);
console.log(numberOfReadBooks); // Output: 2
function numberOfBooksRead(library) {
    let count = 0;
    for (let i = 0; i < library.length; i++) {
        if (library[i].readingStatus === true) {
            count++;
        }
    }
    return count;
}
