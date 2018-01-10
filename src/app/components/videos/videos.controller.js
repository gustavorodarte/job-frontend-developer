class VideosController {
    constructor() {
        this.$onInit = this.$onInit.bind(this);
    }

    $onInit() {
        this.videos = this.searchResult.items;
        
        if(this.bandInfo){
            this.externalLinks = this.bandInfo.externalLinks; 
            this.hasBandInfo = true;
        }else{
            this.hasBandInfo = false;
        }

    }

}


export default VideosController;