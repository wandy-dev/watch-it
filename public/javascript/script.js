var acceptedDomains = ['www.youtube.com', 'youtu.be'];
var activeVideoID;
var currentVideo; 
var integer = 0;
var redditPosts;
var videoIndex = 0;
var videoList = [];
//console.log(player)
function Item(data, index) {
  this.index     = ko.observable(index);
  this.title     = ko.observable(data.title);
  this.thumbnail = ko.observable(data.thumbnail);
  this.videoID   = ko.observable(data.url);
  videoIndex    += 1;
};

function viewModel() {
  var self = this;

  self.videoTitle   = ko.observable();
  self.videos       = ko.observableArray();
  self.booleanValue = ko.observable(true);

  self.changeActiveVideo = function(url, index, title) {
    integer = index;
    tryNext(url, title);
  };

  $.getJSON('https://www.reddit.com/r/videos/hot.json?=jsonp', function(data){
    var posts = data.data;

    var mappedData = $.map(posts.children, function(item) {
      var media    = item.data;
      var url      = new URL(media.url);

      if (media.url.length > 0 && acceptedDomains.includes(url.hostname)) {
        videoList.push({
          title: JSON.parse(item.data.title),
          url:   item.data.url,
          id:    videoIndex
        });
        return new Item(item.data, videoIndex);
      };
    });

    self.videos(mappedData);
  });
};

