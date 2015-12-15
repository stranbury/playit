export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('app',{
      abstract:true,
      views: {
      'header@':  { template: '<acme-navbar></acme-navbar>'}
    }
    })
    .state('app.home', {
      url: '/',
      resolve:{
        movies: function ($q,MoviesService){
          var deferred = $q.defer();
          MoviesService.getPopularMovies().then((data)=>{
            deferred.resolve(data.data.results);
          },(err)=>{
            deferred.reject(err);
          })
          return deferred.promise;
        }
      },
      views:{
        "content@":{
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        }
      }
    })
    .state('app.home.detail', {
      url: 'movie/:id',
      resolve:{
        movie: function ($q, MoviesService, $stateParams){
          var deferred = $q.defer();
          MoviesService.getMovieInformation($stateParams.id).then((data)=>{
            deferred.resolve(data.data);
          },(err)=>{
            deferred.reject(err);
          })
          return deferred.promise;
        },
        reviews: function ($q, MoviesService, $stateParams){
          var deferred = $q.defer();
          MoviesService.getMovieReviews($stateParams.id).then((data)=>{
            deferred.resolve(data.data);
          },(err)=>{
            deferred.reject(err);
          })
          return deferred.promise;
        },
        backdrop: function ($q, MoviesService, $stateParams, Utils){
          var deferred = $q.defer();
          MoviesService.getMovieImages($stateParams.id).then((data)=>{
            let backdropsArray = data.data.backdrops;
            console.log(backdropsArray);
            let path = "";
            let background = "";
            Utils.bubbleSort(backdropsArray);
            path = backdropsArray[0].file_path;
            background = "https://image.tmdb.org/t/p/w1280"+path;
            deferred.resolve(background);
          },(err)=>{
            deferred.reject(err);
          })
          return deferred.promise;
        }
      },
      views:{
        "content@":{
          templateUrl: 'app/movieDetail/movieDetail.html',
          controller: 'MovieDetailController',
          controllerAs: 'movieDetailCtrl'
        }
      }
    })
    .state('app.home.topRated', {
      url: 'top_rated',
      resolve:{
        movies: function ($q, MoviesService){
          var deferred = $q.defer();
          MoviesService.getTopRatedMovies().then((data)=>{
            deferred.resolve(data.data.results);
          },(err)=>{
            deferred.reject(err);
          })
          return deferred.promise;
        }
      },
      views:{
        "content@":{
          templateUrl: 'app/topRated/topRated.html',
          controller: 'TopRatedController',
          controllerAs: 'topRatedCtrl'
        }
      }
    })
    .state('app.home.upcoming', {
      url: 'upcoming',
      resolve:{
        movies: function ($q, MoviesService){
          var deferred = $q.defer();
          MoviesService.getUpCommingMovies().then((data)=>{
            deferred.resolve(data.data.results);
          },(err)=>{
            deferred.reject(err);
          })
          return deferred.promise;
        }
      },
      views:{
        "content@":{
          templateUrl: 'app/upcoming/upcoming.html',
          controller: 'UpcomingController',
          controllerAs: 'upcomingCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}
