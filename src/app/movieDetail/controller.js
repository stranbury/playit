export class MovieDetailController {
  constructor (movie, $log, reviews,backdrop) {
    'ngInject';
    this.log = $log ;
    this.reviews = reviews;
    this.background = backdrop;
    this.movie = movie;
    this.log.info(this.background)
  }




}