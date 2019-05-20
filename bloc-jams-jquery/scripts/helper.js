class Helper {
  playPauseAndUpdate = (song) => {
    player.playPause(song);
    $("#time-control .total-time").text(player.prettyTime(song.duration));
  }
}
const helper = new Helper();

//instantiating is when you create an instance of a class.