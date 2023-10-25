$(function(){
    $("#HeaderContent").load("./HTMLModules/header.html"); 
  });



  // Load the YouTube IFrame API asynchronously
  $.getScript('https://www.youtube.com/iframe_api', function() {
    // The YouTube IFrame API has been loaded
    onYouTubeIframeAPIReady();
  });
  

let player;
const scrollThreshold = 0.1; // Set the scroll threshold as a decimal between 0 and 1

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-container', {
    height: $(window).height(),
    width: $(window).width(),
    videoId: '0Y7exA8-TCY', // Replace with the YouTube video ID
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      showinfo: 0,
      mute: 1,
      modestbranding: 1,
      title: 0
    },
    events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
  event.target.updatePlayerSize()
  $(window).scroll(handleScroll);
  $(window).on('resize', updatePlayerSize);
}

function handleScroll() {
  const scrollPosition = $(window).scrollTop();
  const windowHeight = $(window).height();
  const pageHeight = $(document).height();

  const scrolledPercentage = scrollPosition / (pageHeight - windowHeight);

  if (scrolledPercentage >= scrollThreshold) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
}


function updatePlayerSize() {
  if ($(window).width() < $(window).height()) {
    const newWidth = $(window).height();
    const newHeight = $(window).width();
  } else {
    const newWidth = $(window).width();
    const newHeight = $(window).height();
  };
  player.setSize(newWidth, newHeight);
}