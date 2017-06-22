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
  nextpage = 50;

  $('#load-more').click(function(event) {
    event.preventDefault();
    $('#load-more').html('<i class="fa fa-refresh fa-spin fa-lg fa-fw"></i>')
    getVideos('https://www.reddit.com/r/videos/.json?jsonp&limit=' + nextpage);
    nextpage += 25;
  });
});

