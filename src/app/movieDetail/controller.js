'use strict'
export class MovieDetailController {
  constructor (movie, $log, reviews,backdrop) {
    'ngInject';
    this.log = $log ;
    this.reviews = reviews;
    this.background = backdrop;
    this.movie = movie;
    $log.debug(this.movie);
    this.preview = false;
    this.link = 'OPmOXJtxxoo';
    $log.log( this.youtube  );
  }




}
