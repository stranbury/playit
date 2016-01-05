const TMDB = "5f8becda4286b8ba00629d8bf4cf8516";
export class MoviesService {
  constructor($http, $log, $state, $q) {
    'ngInject';
    this.http = $http;
    this.debug = $log;
    this.state = $state;
    this.q = $q;
  }
  getPopularMovies(){
    var deffered = this.q.defer();
    this.http.get('https://api.themoviedb.org/3/movie/popular',{
               params:{
                   api_key: TMDB
               }
           }).then((data)=>{
             deffered.resolve(data);
           }, (err)=>{
             this.deffered.reject(err);
           })
      return  deffered.promise;
  }

  getSearchFromApi(search){
    let deffered = this.q.defer();
    this.http.get('http://api.themoviedb.org/3/search/movie',{
               params:{
                   api_key: TMDB,
                   query: search
               }
           }).then((data)=>{
             deffered.resolve(data);
           }, (err)=>{
             this.deffered.reject(err);
           })
      return  deffered.promise;
  }

  getMovieInformation(id){
    var deferred = this.q.defer();
    this.http.get('https://api.themoviedb.org/3/movie/'+id,{
               params:{
                   api_key: TMDB
               }
           }).then((data)=>{
             this.debug.log(data)
             deferred.resolve(data);
           }).catch((err)=>{
             this.debug.log(err);
             deferred.reject(err)
           });
      return  deferred.promise;

  }
  getMovieImages(id){
    var deferred = this.q.defer();
    this.http.get('https://api.themoviedb.org/3/movie/'+id+'/images',{
               params:{
                   api_key: TMDB
               }
           }).then((data)=>{
             this.debug.log(data)
             deferred.resolve(data);
           }).catch((err)=>{
             this.debug.log(err);
             deferred.reject(err)
           });
      return  deferred.promise;
  }
  getMovieReviews(id){
    var deferred = this.q.defer();
    this.http.get('https://api.themoviedb.org/3/movie/'+id+'/reviews',{
               params:{
                   api_key: TMDB
               }
           }).then((data)=>{
             this.debug.log(data)
             deferred.resolve(data);
           }).catch((err)=>{
             this.debug.log(err);
             deferred.reject(err)
           });
      return  deferred.promise;
  }
  getLastMovie(){
    var deferred = this.q.defer();
    this.http.get('https://api.themoviedb.org/3/movie/latest',{
               params:{
                   api_key: TMDB
               }
           }).then((data)=>{
             this.debug.log(data)
             deferred.resolve(data);
           }).catch((err)=>{
             this.debug.log(err);
             deferred.reject(err)
           });
      return  deferred.promise;
  }
  getTopRatedMovies(){
    var deffered = this.q.defer();
    this.http.get('https://api.themoviedb.org/3/movie/top_rated',{
               params:{
                   api_key: TMDB
               }
           }).then((data)=>{
             this.debug.log(data)
             deffered.resolve(data);
           }).catch((err)=>{
             this.debug.log(err);
             deffered.reject(err)
           });
      return  deffered.promise;
  }
  getUpCommingMovies(){

    let deffered = this.q.defer();
    this.http.get('https://api.themoviedb.org/3/movie/upcoming',{
               params:{
                   api_key: TMDB
               }
           }).then((data)=>{
             this.debug.log(data)
             deffered.resolve(data);
           }).catch((err)=>{
             this.debug.log(err);
             deffered.reject(err)
           });
      return  deffered.promise;
  }
  getTraillerMovie(id){
    let deffered = this.q.defer();
    this.http.get('https://api.themoviedb.org/3/movie/'+id+'/videos',{
               params:{
                   api_key: TMDB
               }
           }).then((data)=>{
             this.debug.log(data)
             deffered.resolve(data);
           }).catch((err)=>{
             this.debug.log(err);
             deffered.reject(err)
           });
      return  deffered.promise;
  }
  getActorsMovie(id){
    let deffered = this.q.defer();
    this.http.get('https://api.themoviedb.org/3/movie/'+id+'/credits',{
               params:{
                   api_key: TMDB
               }
           }).then((data)=>{
             this.debug.log(data)
             deffered.resolve(data);
           }).catch((err)=>{
             this.debug.log(err);
             deffered.reject(err)
           });
      return  deffered.promise;
  }
  getPersonInformation(id){

    let deffered = this.q.defer();
    this.http.get('https://api.themoviedb.org/3/person/'+id,{
               params:{
                   api_key: TMDB
               }
           }).then((data)=>{
             this.debug.log(data)
             deffered.resolve(data);
           }).catch((err)=>{
             this.debug.log(err);
             deffered.reject(err)
           });
      return  deffered.promise;
  }
  getTrendy(){
    let deffered = this.q.defer();
    this.http.get('https://api.themoviedb.org/3/movie/now_playing',{
               params:{
                   api_key: TMDB
               }
           }).then((data)=>{
             this.debug.log(data)
             deffered.resolve(data);
           }).catch((err)=>{
             this.debug.log(err);
             deffered.reject(err)
           });
      return  deffered.promise;
  }
  getRecommandation(id){
    let deffered = this.q.defer();
    this.http.get('https://api.themoviedb.org/3/movie/'+id+'/similar',{
               params:{
                   api_key: TMDB
               }
           }).then((data)=>{
             this.debug.info(data)
             deffered.resolve(data.data);
           }).catch((err)=>{
             this.debug.log(err);
             deffered.reject(err)
           });
      return  deffered.promise;
  }
  getMoviesGenre(id){
    let deffered = this.q.defer();
    this.http.get('https://api.themoviedb.org/3/genre/'+id+'/movies',{
               params:{
                   api_key: TMDB
               }
           }).then((data)=>{
             this.debug.log(data)
             deffered.resolve(data);
           }).catch((err)=>{
             this.debug.log(err);
             deffered.reject(err)
           });
      return  deffered.promise;
  }
}
