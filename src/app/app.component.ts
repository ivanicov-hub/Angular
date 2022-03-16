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
    },
    {
      title: 'Moana',
      releaseDate: new Date(),
      price: 300.99
    },
    {
      title: 'Moana',
      releaseDate: new Date(),
      price: 300.99
    },
    {
      title: 'Moana',
      releaseDate: new Date(),
      price: 300.99
    },
    {
      title: 'Moana',
      releaseDate: new Date(),
      price: 300.99
    },
    {
      title: 'Moana',
      releaseDate: new Date(),
      price: 300.99
    }];

    this.moviesFutureReleases = [];
  }

  moviesInTheaters;
  moviesFutureReleases;
  title = 'angular-movies';

  handleRating(rate: number) {
    alert(`The user selected ${rate}`)
  }
}
