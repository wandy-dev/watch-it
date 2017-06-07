var videoIndex = 0;
var videoList = [];
var activeVideoID;
var currentVideo; 
var redditPosts;
var integer = 0;
var acceptedDomains = ['www.youtube.com', 'youtu.be'];
//console.log(player)
function Item(data, index) {
  this.title = ko.observable(data.title);
  this.thumbnail = ko.observable(data.thumbnail);
  this.videoID = ko.observable(data.url);
  this.index = ko.observable(index);
  videoIndex += 1;
};

function viewModel() {
  var self = this;

  self.videos = ko.observableArray([]);
  booleanValue = ko.observable(true);
  self.title = ko.observable('');

  self.changeActiveVideo = function(url, index) {
    integer = index;
    newID = getURLParameter('v', url);
    renderVideo(newID);
  };

  $.getJSON('https://www.reddit.com/r/videos/hot.json?=jsonp', function(data){
    var posts = data.data;
    var mappedData = $.map(posts.children, function(item) {
      var media = item.data;
      var url = new URL(media.url);
      if (media.url.length > 0 && acceptedDomains.includes(url.hostname)) {
        videoList.push({title: item.data.title, url: item.data.url, id: videoIndex});
        return new Item(item.data, videoIndex);
      };
    });
    self.videos(mappedData);
    //currentVideo = posts.children[0];
    redditPosts = data.data;
    activeVideoID = getURLParameter('v', currentVideo.data.url);
    //console.log(player)
  });
};

