import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Comment } from '../comment';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  comment: Comment;
  postId: number;
  comments: Comment[] = [];
  tmpComments: Comment[] = [];
  name: string = '';
  body: string = '';
  email: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(async params => {
      console.log(params);
      await this.getPostById(params.postId);
      await this.getRelatedCommentsByPostId(params.postId);
    });
  }

  ngOnInit() {

  }

  getPostById(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      response => response.json())
      .then(json => {
        console.log(json);
        this.comment = json;
      })
  }

  getRelatedCommentsByPostId(id) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(
      response => response.json())
      .then(json => {
        console.log(json);
        this.comments = JSON.parse(JSON.stringify(json));
        this.tmpComments = JSON.parse(JSON.stringify(json));
      })
  }

  search() {
    console.log(this.name, this.body, this.email)
    this.tmpComments = this.comments.filter(comment => {
      return comment.name.toLowerCase().includes(this.name.toLowerCase()) && comment.body.toLowerCase().includes(this.body.toLowerCase()) && comment.email.toLowerCase().includes(this.email.toLowerCase())
    });
    console.log(this.tmpComments);
  }

}