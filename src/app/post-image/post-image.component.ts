import { Component, OnInit } from '@angular/core';
import {ImagesService} from "../images.service"

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.css']
})
export class PostImageComponent implements OnInit {
  posts;
  constructor(private imagesService: ImagesService) {
    this.posts = imagesService.posts;
   }

  ngOnInit() {
  }
  share(){
    alert("El producto se compartio");
  }

}
