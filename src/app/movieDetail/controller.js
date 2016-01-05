'use strict'
export class MovieDetailController {
  constructor (movie, $log, reviews, backdrop, recommandations, trailler, actors ) {
    'ngInject';
    this.recommandations = recommandations.results;
    console.log(this.recommandations);
    this.log = $log ;
    this.reviews = reviews;
    this.background = backdrop;
    this.movie = movie;
    this.actors = actors.data.cast;
    this.team = actors.data.crew;
    this.trailler = trailler.data.results[0].key;
    $log.info(trailler.data.results[0].key);
    $log.info(actors);
    this.preview = 0;
    this.more = true;
    this.link = 'https://www.youtube.com/watch?v='+this.trailler;

  }

  lookPreview(){
    this.preview = 1;
    angular.element(".preview").YTPlayer();
  }

  closePreview(){
    this.preview = 0;
  }



}
