import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
  
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input ()postLoveIts: number;
  @Input () postCreated_at: Date;
  constructor() { }

  ngOnInit() {
  }
  onLove() {
    this.postLoveIts++;
  }
  onDontLove() {
    this.postLoveIts--;
  }
}
