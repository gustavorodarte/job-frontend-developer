function config($stateProvider, $urlServiceProvider, $locationProvider) {

  $locationProvider
    .hashPrefix('');

  $urlServiceProvider.rules.otherwise({ state: 'home' });

  $stateProvider.state('home', {
    url: '/',
    component: 'home'
  });

  $stateProvider.state('videos', {
    url: '/:bandName',
    component: 'videos',
    resolve: {
      searchResult: ['$transition$', 'youtubeService', function ($transition$, youtubeService) {
        let bandName = $transition$.params().bandName;
        return youtubeService.getSearchResults(bandName);
      }],
      bandInfo: [ '$transition$', 'ticketMasterService', function ($transition$, ticketMasterService) {
        let bandName = $transition$.params().bandName;
        return ticketMasterService.getBandInfo(bandName);
      }],
      bandName: [ '$transition$', function ($transition$) {
        let bandName = $transition$.params().bandName;
        return bandName;
      }]

    },
  });

};

config.$inject = ['$stateProvider', '$urlServiceProvider', '$locationProvider'];
export default config;