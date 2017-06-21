$(document).ready(function() {
  $('#autoplay').click(function() {
    console.log('asdf');
    var checkbox = $('#autoplay-input');
    checkbox.trigger('click');
    if (booleanValue() == true) {
			setTimeout(tryNext(videoList[integer += 1].url, videoList[integer].title), 0);
    }
  });
});

