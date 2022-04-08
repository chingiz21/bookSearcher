export function filterBooks(books, filterOption) {
    if (filterOption === 'All') {
        return books.items;
    };

    if (filterOption != 'none') {
        return books.items.filter(book => book.volumeInfo.categories === undefined ? 'undefined' : book.volumeInfo.categories.includes(filterOption));
    };
    
    return books.items;
}