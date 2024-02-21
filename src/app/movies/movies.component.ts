import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';
MoviesService
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movieCartona:any[]=[];
  imgBegin:string="https://image.tmdb.org/t/p/w500";
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTriending('movie').subscribe((response)=>{
      this.movieCartona=response.results;
      console.log('movieeeee',this.movieCartona)
    })
  }

}
