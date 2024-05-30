import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent implements OnInit{

  postData!:any;
  similarPostsArray!:any;

  ngOnInit(): void {
    this.router.params.subscribe(val=>{
      this.postService.countViews(val['id'])
      this.postService.loadOnePost(val['id']).subscribe(post=>{
        this.postData=post;
        this.loadSimilarPost(this.postData.category.categoryId);
      })
    })
  }
  loadSimilarPost(catId:any){
    this.postService.loadSimilar(catId).subscribe(val=>{
      this.similarPostsArray=val;
    })
  }
  constructor(private router:ActivatedRoute,private postService:PostsService){

  }
}
