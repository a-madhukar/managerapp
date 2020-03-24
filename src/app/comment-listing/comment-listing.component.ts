import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Comment } from '../comment';

@Component({
  selector: 'app-comment-listing',
  templateUrl: './comment-listing.component.html',
  styleUrls: ['./comment-listing.component.css']
})
export class CommentListingComponent implements OnInit {

  comments: Comment[] = [];
  displayedColumns: string[] = ['id', 'userId', 'title', 'body', 'actions'];
  dataSource = new MatTableDataSource<Comment>(this.comments);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private router: Router) {
    this.getComments();

  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getComments() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(
      response => response.json())
      .then(json => {
        this.comments = json;
        this.dataSource = new MatTableDataSource<Comment>(this.comments);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  viewDetails(row) {
    console.log(row);
    this.router.navigate(['/comment-detail'], {
      queryParams: {
        postId: row.id
      }
    });
  }

}