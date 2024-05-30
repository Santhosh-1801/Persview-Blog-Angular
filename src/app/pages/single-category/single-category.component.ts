import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css'
})
export class SingleCategoryComponent implements OnInit{

  postsArray!:Array<any>;
  categoryObj!:any;

  ngOnInit(): void {
    
  }
  constructor(private router:ActivatedRoute,private postService:PostsService){
    this.router.params.subscribe(val=>{
      this.categoryObj=val;
      this.postService.loadCategoryPosts(val['id']).subscribe(post=>{
        this.postsArray=post;
      })
    })
  }
}
