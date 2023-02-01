import { DiscoverModuleService } from './../../services/discover-module.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent implements OnInit {
  movies: any = [];
  img1: any;
  img2: any;
  showMovieDetails: boolean = false;
  showMovieDetails2: boolean = false;
  constructor(private discoverService: DiscoverModuleService) {}

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList() {
    this.discoverService.getMovieList().subscribe((data: any) => {
      this.movies = data;
      this.img1 = data[0].Poster;
      this.img2 = data[6].Poster;
      console.log(data);
    });
  }
  showDetails(i: any) {
    window.scroll(0, 0);
    this.showMovieDetails = true;
    this.showMovieDetails2 = false;
    // if(i <= 4){
    // }else if(i >= 5){
    //   window.scroll(0,0)
    //   this.showMovieDetails2 = true;
    //   this.showMovieDetails=false;
    // }
  }

  showDetailsAgain(i: any) {

    this.showMovieDetails2 = true;
    this.showMovieDetails = false;
  }
}
