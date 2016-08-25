angular.module('lightsaberApp')
  .factory('Episode', Episode)

Episode.$inject = ['$resource']

function Episode($resource){

  var EpisodeResource =  $resource('http://localhost:3000/episodes/:id', {id: '@_id'}, {'update': { method:'PUT' }});
  return EpisodeResource;
}
