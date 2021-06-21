import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  prefix:string='https://image.tmdb.org/t/p/w500/';
id:string='';
details:any={};
  constructor(private _MoviesService:MoviesService,private _ActivatedRoute:ActivatedRoute) {

 
  
   }

  ngOnInit(): void {
    this.id=this._ActivatedRoute.snapshot.params.id;
this._MoviesService.getDetails(this.id).subscribe((response)=>{
this.details=response;


})
this._MoviesService.getTvDetails(this.id).subscribe((response)=>{
  this.details=response;
  
  
  })
  }

}
