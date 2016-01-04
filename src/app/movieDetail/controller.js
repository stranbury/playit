'use strict'
export class MovieDetailController {
  constructor (movie, $log, reviews,backdrop) {
    'ngInject';
    this.log = $log ;
    this.reviews = reviews;
    this.background = backdrop;
    this.movie = movie;
    $log.debug(this.movie);
    this.preview = true;
    this.link = 'OPmOXJtxxoo';
    this.youtube = _youtubeVideo;
    $log.log( this.youtube  );
    youtubeVideo('sl1Q6W0UzGk', {
  elementId: 'youtube',
  width: 640,
  height: 390,
  autoplay: true,
  controls: false
})

  }




}
