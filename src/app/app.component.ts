import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: '1 title', text: '1 text', id: 1},
    {title: '2 title', text: '2 text', id: 2}
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }
}
