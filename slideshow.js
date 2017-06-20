var images = ["slide1.jpg","slide2.jpg","slide3.jpg","slide4.jpg","slide5.jpg","slide6.jpg"]
var caption= ["caption 1", "caption 2", "caption 3"]
var imageNumber = 0;
var imageLength = images.length - 1;

function changeImage(x) {
imageNumber += x;
//if reach end of array start over
  if (imageNumber > imageLength) {
  imageNumber = 0;
  }
  if (imageNumber < 0) {
  imageNumber = imageLength;
  }
  document.getElementById("slideshow").src = images[imageNumber];
  document.getElementbyId("caption").innerHTML = caption[imageNumber];
  
  return false;
}

var $star = $('.smallstar');
var $win = $(window);

$win.on('scroll', function () {
var top = $win.scrollTop();
$star.css('transform','rotate(' + top + 'deg)' );

})