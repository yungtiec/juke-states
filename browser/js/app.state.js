juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '../views/albums.html',
    controller: 'AlbumsCtrl'
  })
  .state('artistList', {
    url: '/artists',
    templateUrl: '../views/artists.html',
    controller: 'ArtistsCtrl'
  })
  .state('album', {
    url: '/album/:albumId',
    templateUrl: '../views/album.html',
    controller: 'AlbumCtrl'
  })
  .state('artist', {
    url: '/artist/:artistId',
    templateUrl: '../views/artist.html',
    controller: 'ArtistCtrl'
  })
});
