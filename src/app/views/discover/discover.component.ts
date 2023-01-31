import { DiscoverModuleService } from './../../services/discover-module.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  movies:any;
  img1:any;
  constructor(private discoverService: DiscoverModuleService) { }

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList(){
    this.discoverService.getMovieList().subscribe((data:any) =>{
      this.movies = data;
      this.img1=data[0].Poster;
      console.log(data);
    })
  }

}
