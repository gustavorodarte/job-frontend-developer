function config($stateProvider, $urlServiceProvider) {
  $urlServiceProvider.rules.otherwise({ state: 'home' });

  $stateProvider.state('home', {
    url: '/',
    component: 'home'
  });

  $stateProvider.state('home.videos', {
    url: ':bandName',
    views: {
      "$default@^.^": {
        component: 'videos',
      }
    },
    resolve: {
      searchResult: function ($transition$, youtubeService) {
        let bandName = $transition$.params().bandName;
        return youtubeService.getSearchResults(bandName);
      },
      
    },
  });

};





config.$inject = ['$stateProvider', '$urlServiceProvider'];
export default config;