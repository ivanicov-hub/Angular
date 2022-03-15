import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.moviesInTheaters = [{
      title: 'Spider-Man',
      releaseDate: new Date(),
      price: 1400.99
    },
    {
      title: 'Moana',
      releaseDate: new Date(),
      price: 300.99
    }];

    this.moviesFutureReleases = [{
      title: 'Avengers',
      releaseDate: new Date(),
      price: 456.99
    },
    {
      title: 'Toy story',
      releaseDate: new Date(),
      price: 789.99
    }];
  }

  moviesInTheaters;
  moviesFutureReleases;
  title = 'angular-movies';

  duplicateNumber(num: number) {
    return num * 2;
  }
}
