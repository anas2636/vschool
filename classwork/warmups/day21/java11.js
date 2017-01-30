$("#color-button").click(function() {
  var counter = -1;
  var words = "00:00:20 00:00:19 00:00:18 00:00:17 00:00:16 00:00:15 00:00:14 00:00:13 00:00:12 00:00:11 00:00:10 00:00:09 00:00:08 00:00:07 00:00:06 00:00:05 00:00:04 00:00:03 00:00:02 00:00:01 00:00:00 The end of the world has come upon us".split(" ");
  var repeat = setInterval(function() {
    counter++;
    if(counter >= words.length) {
      clearInterval(repeat);
    }
    $("p").html(words[counter]);
  }, 1000)
});