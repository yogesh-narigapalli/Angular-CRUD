import { Component, OnInit } from '@angular/core';
import { PostService} from '../../services/post.service';

import {Post} from '../../models/post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[];
  currentPost:Post={
    id:0,
    title:'',
    body:''
  };
  isEdit:boolean=false;

  constructor(private postService:PostService) {
    this.postService.getPosts().subscribe(posts=>{
      this.posts=posts;
    });


   }

  ngOnInit() {
  }
  editPost(post){
    this.currentPost=post;
    this.isEdit=true;
  }
  onNewPost(post){
    this.posts.unshift(post);

  }

  onDelete(post:Post){
    if(confirm("Are you sure ?")){
      // this.postService.onDelete(post.id).subscribe(ki=>{
        this.posts.forEach((cur,index)=>{
          if(post.id == cur.id){
        this.posts.splice(index,1);
          }
        
        })
       


            // })
    }
    
  }
  onUpdatedPost(post:Post){
this.posts.forEach((cur,index)=>{
  if(post.id == cur.id){
this.posts.splice(index,1);
this.posts.unshift(post);
this.isEdit=false;
this.currentPost={
  id:0,
  title:'',
  body:''
}
  }

})
  }
  

}
