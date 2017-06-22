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
});

