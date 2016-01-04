export class GenreController {
  constructor (movies, $log) {
    'ngInject';
    this.log = $log ;
    this.movies= movies;
    this.log.log(movies)
  }
}
