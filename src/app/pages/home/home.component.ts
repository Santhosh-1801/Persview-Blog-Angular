import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featuredPostsArray!:Array<any>;
  latestPostsArray!:Array<any>;

  constructor(private postService:PostsService){
  }
  ngOnInit(){
    this.postService.loadFeaturedPosts().subscribe(val=>{
      this.featuredPostsArray=val;
    })
    this.postService.loadLatestPost().subscribe(val=>{
      this.latestPostsArray=val;
    })
  }


}
