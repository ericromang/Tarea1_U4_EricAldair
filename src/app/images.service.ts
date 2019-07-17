import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  public posts = [
    {
      name: "Spiderman",
      id: 0,
      descrip: "Pelicula muy buena de arañitas",
      img: "https://pulpfictioncine.com/download/multimedia.normal.b506b2aec0715c53.5370696465722d4d616e20506f737465725f6e6f726d616c2e6a7067.jpg",
      rank:4
    },
    {
      name: "Mad max",
      id: 1,
      descrip: "Pelicula muy buena sobre mexico sin petrolio",
      img: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/87368/88594/Mad_Max_Fury_Road_us_one_sheet_buy_original_movie_posters_at_starstills__22128.1427574502.jpg?c=2?imbypass=on",
      rank:5
    },
    {
      name: "Detective pikachu",
      id: 2,
      descrip: "pikachu bailando cumbia",
      img: "http://cdn.collider.com/wp-content/uploads/2019/02/pokemon-detective-pikachu-poster.jpg",
      rank:1
    },
    {
      name: "Sony",
      id: 3,
      descrip: "al vato lo reicieron porque estaba feo",
      img: "https://i.redd.it/hhiu50fh3h321.jpg",
      rank:2
    },
    {
      name: "Toy Story",
      id: 4,
      descrip: "Los juguetes diabolicos",
      img: "https://cdn.atomix.vg/wp-content/uploads/2019/02/ToyStory4_Poster_nuevo.jpg",
      rank:3
    }
  ];  
  constructor() { }
}
