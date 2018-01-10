function youtubeService($http) {

    const service = {
        getSearchResults: getSearchResults
    };

    const apiKey = "AIzaSyDd_sfvQ4NASb-k0oKYAr_g9FZcQILtyKc";

    return service;

    function getSearchResults(searchTerm) {
        return $http.get("https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&type=video&maxResults=8&part=snippet&q=" + searchTerm)
            .then(getSearchResultsComplete)
            .catch(getSearchResultsFailed);
    }

    function getSearchResultsComplete(response) {
        return response.data;
    }

    function getSearchResultsFailed(error) {
        console.error('Failed for getBandInfo' + error.data);
    }

}

youtubeService.$inject = ['$http'];
export default youtubeService;