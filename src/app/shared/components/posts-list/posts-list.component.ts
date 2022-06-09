import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/interfaces/post.interface';

const mockedPosts: Post[] = [
  {
    imageUrl: './assets/images/1.jpg',
    name: 'Terrace',
    description: 'Beautiful terrace with strange brush on top'
  },
  {
    imageUrl: './assets/images/2.png',
    name: 'Tea Shop',
    description: 'Authentic chinese tea shop in light attire'
  },
  {
    imageUrl: './assets/images/3.jpg',
    name: 'Dinning Room',
    description: 'Awesome very fashionable dinning room'
  },
]

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    this.posts = mockedPosts;
  }

  setImage(i: number): object {
    return {
      'background-image': `url('${this.posts[i].imageUrl}')`
    }
  }

}
