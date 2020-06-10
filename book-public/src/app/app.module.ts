import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from "@angular/common/http";
import { APP_BASE_HREF } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { BookListComponent } from './book-list/book-list.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AddComponent } from './add/add.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BookUpdateComponent } from './book-update/book-update.component';

@NgModule({
  declarations: [
    BookListComponent,
    AboutComponent,
    HeaderComponent,
    FrameworkComponent,
    BookDetailsComponent,
    AddComponent,
    HomePageComponent,
    BookUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'create',
        component: AddComponent
      },
      {
        path: 'books',
        component: BookListComponent
      },
      {
        path: 'books/:bookid',
        component: BookDetailsComponent
      },
      {
        path: 'update/:bookid',
        component: BookUpdateComponent
      }
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
