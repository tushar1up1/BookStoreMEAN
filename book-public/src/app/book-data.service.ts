import { Injectable } from '@angular/core';
import {Author, Book, Publisher} from "./book";
import { HttpClient   } from "@angular/common/http";

@Injectable()
export class BookDataService {
  private booksUrl = 'http://localhost:3000/api/books';
  private authorsURL = 'http://localhost:3000/api/authors';
  private publishersURL = 'http://localhost:3000/api/publishers';

  constructor(private http: HttpClient ) { }

  private handleError (error: any) {
    console.log("error");
  };

  getBooks(): Promise<void | Book[]> {
    return this.http.get(this.booksUrl)
      .toPromise()
      .then(response => response as Book[])
      .catch(this.handleError);
  }

  getSingleBook(bookID: String): Promise<void | Book> {
    return this.http.get(this.booksUrl + '/' + bookID)
      .toPromise()
      .then(response => response as Book)
      .catch(this.handleError);
  }

  createBook(newBook: Book): Promise<void | Book> {
    return this.http.post(this.booksUrl, newBook)
      .toPromise()
      .then(response => response as Book)
      .catch(this.handleError);
  }

  getAuthors(): Promise<void | Author[]> {
    return this.http.get(this.authorsURL)
      .toPromise()
      .then(response => response as Author[])
      .catch(this.handleError);
  }

  getPublishers(): Promise<void | Publisher[]> {
    return this.http.get(this.publishersURL)
      .toPromise()
      .then(response => response as Publisher[])
      .catch(this.handleError);
  }
}
