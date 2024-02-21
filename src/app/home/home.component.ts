import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  moviesCartona:any[]=[];
  tvsCartona:any[]=[];
  personsCartona:any[]=[];
  imgBegin:string="https://image.tmdb.org/t/p/w500";
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {

    this._MoviesService.getTriending('movie').subscribe((response)=>{
      this.moviesCartona=response.results;
    })
    this._MoviesService.getTriending("tv").subscribe((response)=>{
      this.tvsCartona=response.results;
    })
    this._MoviesService.getTriending("person").subscribe((response)=>{
      this.personsCartona=response.results;
      console.log(this.personsCartona)
    })
  }
}
