export function MovieDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/movie/movie.html',
    scope: {
      movie :"=",
      image: "="
    },
    controller: MovieController,
    controllerAs: 'movieCtrl',
    bindToController: true
  };

  return directive;
}

class MovieController {
  constructor () {
    'ngInject';
    console.log(this.image);
    this.imgUrl = "https://image.tmdb.org/t/p/w154";
  }
}
