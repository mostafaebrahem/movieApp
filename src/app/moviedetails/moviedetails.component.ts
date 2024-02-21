import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  id:string;
  tv:string;
  tvdetails:any={}
  imgBegin:string="https://image.tmdb.org/t/p/w500";
  detailsCartona:any={};
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) { 
    this.id= this._ActivatedRoute.snapshot.params['id'];
    this.tv=this._ActivatedRoute.snapshot.params['id'];
    console.log(this.id)
  }

  ngOnInit(): void {
    this._MoviesService.getMovieDetails(this.id).subscribe((response)=>{
         this.detailsCartona=response;
      console.log(this.detailsCartona)
      
    })
    this._MoviesService.getTvdetails(this.tv).subscribe((response)=>{
      this.tvdetails=response;
      console.log("hhxss",this.tvdetails)
    })
  }

}
