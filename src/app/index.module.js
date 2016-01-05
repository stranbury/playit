import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { SearchController } from './search/search.controller';
import { GenreController } from './genre/genre.controller';
import { TopRatedController } from './topRated/controller';
import { UpcomingController } from './upcoming/controller';
import { MovieDetailController } from './movieDetail/controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MovieDirective } from '../app/components/movie/directive';
import { MoviesService } from '../app/components/movies/movies.service';
import { UtilsService } from '../app/components/utils/service';
angular.module('playitMaterial', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('SearchController', SearchController)
  .controller('MovieDetailController', MovieDetailController)
  .controller('GenreController', GenreController)
  .controller('TopRatedController', TopRatedController)
  .controller('UpcomingController', UpcomingController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('movie', MovieDirective)
  .directive('movie', MovieDirective)
  .service('MoviesService', MoviesService)
  .service('Utils', UtilsService);
