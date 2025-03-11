document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audioPlayer");
  const playlist = document.getElementById("playlist");
  const audioSource = document.getElementById("audioSource");

  playlist.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
          let newSrc = e.target.getAttribute("data-src");
          audioSource.src = newSrc;
          audioPlayer.load();
          audioPlayer.play();
      }
  });
});
