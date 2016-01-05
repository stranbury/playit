'use strict'
export class MovieDetailController {
  constructor (movie, $log, reviews, backdrop, recommandations) {
    'ngInject';
    this.recommandations = recommandations.results;
    console.log(this.recommandations);
    this.log = $log ;
    this.reviews = reviews;
    this.background = backdrop;
    this.movie = movie;
    $log.info(this.movie);
    this.preview = 0;
    this.more = false;
    this.link = 'OPmOXJtxxoo';
  }




}
