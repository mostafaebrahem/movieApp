import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryCartona:any[]=[];
  imgBegin:string="https://image.tmdb.org/t/p/w500";

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTriending('person').subscribe((response)=>{
      this.galleryCartona=response.results;
     
    })
  }

}
