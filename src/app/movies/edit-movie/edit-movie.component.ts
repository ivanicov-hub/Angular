import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.models';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieDTO = {
    title: 'Spider-Man', inTheaters: true, summary: 'Whatever',
    releaseDate: new Date(), trailer: 'SDFSDF', poster: 'https://ichef.bbci.co.uk/images/ic/640x360/p0b6kkh5.jpg'
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    })
  }

  saveChanges(movieCreationDTO: movieCreationDTO) {

  }
}
