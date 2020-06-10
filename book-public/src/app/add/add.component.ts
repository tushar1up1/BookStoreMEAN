import {Component, NgZone, OnInit} from '@angular/core';
import {BookDataService} from "../book-data.service";
import {Author, Book, Publisher} from "../book";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [BookDataService]
})
export class AddComponent implements OnInit {

  public newBook: Book = {
    _id: "",
    author: undefined,
    available: 0,
    genre: "",
    language: "",
    pages: 0,
    publisher: undefined,
    title: ""
  };

  authors: Author[];
  publishers: Publisher[];

  constructor(private bookService: BookDataService, private router: Router, private ngZone: NgZone) { }

  ngOnInit() {
    this.bookService
      .getAuthors()
      .then((authors: Author[]) => {
        this.authors = authors.map(author => {
          return author;
        });
      });

    this.bookService
      .getPublishers()
      .then((publishers: Publisher[]) => {
        this.publishers = publishers.map(publisher => {
          return publisher;
        });
      });
  }

  public createNewBook(newBook: Book): void {
    this.bookService.createBook(newBook)
      .then((insertedBook: Book) => {
        this.ngZone.run(() => {
          this.router.navigate([`/books/${insertedBook._id}`]);
        });
      });
  }

  pageContent = {
    header: {
      title: 'Add new Book',
      body: 'Fill the form below.'
    }
  };
}
