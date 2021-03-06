import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Injectable()
export class BookService {
getBooks(): Promise<Book[]> {
return Promise.resolve(BOOKS);
}
addBook(book: Book): void {
this.getBooks().then(books => {
const maxIndex = books.length - 1;
const bookWithMaxIndex = books[maxIndex];
book.id = bookWithMaxIndex.id + 1;
books.push(book);
}
);
}
getBook(id: number): Promise<Book> {
return this.getBooks().then(books => books.find(book => book.id === id));
}
deleteBook(id: number): void {
this.getBooks().then(books => {
const book = books.find(ob => ob.id === id);
const bookIndex = books.indexOf(book);
books.splice(bookIndex, 1);
}
);
}
}
