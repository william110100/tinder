export function selectedBook(book) {
    // selectedBook is an ActionCreator, it needs to return an action, an object with type property
    return {
        type: "BOOK_SELECTED",
        payload: book
    }
}