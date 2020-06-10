import { Component, OnInit } from '@angular/core';
import { Book } from "../book";
import { BookDataService } from '../book-data.service';
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  providers: [BookDataService]
})
export class BookDetailsComponent implements OnInit {

  selectedBook: Book;

  constructor(private bookService: BookDataService,private route: ActivatedRoute) {}

  ngOnInit() : void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.bookService.getSingleBook(params['bookid'])
    }))
      .subscribe((food: Book) => {
        this.selectedBook = food;
        this.pageContent.header.title = food.title;
        this.pageContent.header.body = "Details for selected Book.";
      })
  }

  pageContent = {
    header: {
      title: '',
      body: ''
    }
  };

}
