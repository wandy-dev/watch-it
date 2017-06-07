// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytplayer', {
    videoId: '',
    height: '390',
    width: '640',
    events: {
      'onReady': onPlayerReady
    }
  });
};

function onPlayerReady(event) {
  player.addEventListener('onStateChange', function(e) {
    console.log('State is:', e.data);
  });
  tryNext(videoList[integer].url, videoList[integer].title);
  event.target.playVideo();
};
function onPlayerStateChange(evt) {
  console.log(evt);
  if (evt.data == YT.PlayerState.ENDED) {
    if (booleanValue() == true) {
      setTimeout(tryNext(videoList[integer += 1].url, videoList[integer].title), 0);
    }
  }
};
function renderVideo(newID) {
  player.loadVideoById(newID);
};

function tryNext(url, title) {
  newID = getURLParameter('v', url);
  renderVideo(newID);
  self.title = title
  console.log(title + ' ' + url)
};
