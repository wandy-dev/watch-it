$(document).ready(function() {
  $('#autoplay').click(function() {
    var checkbox = $('#autoplay-input');
    checkbox.trigger('click');
    if (booleanValue() == true) {
      if (player.getPlayerState() == 0) {
        setTimeout(tryNext(videoList[integer += 1].url, videoList[integer].title), 0);
      };
    };
  });
  // Store what page to load next
  nextpage = 25;

  $('#load-more').click(function(event) {
    // Retains compatibility for those with no javascript
    event.preventDefault();

    // Fetch the data
    getVideos('https://www.reddit.com/r/videos/.json?jsonp&limit=' + nextpage);
    nextpage += 25;

  });
});

