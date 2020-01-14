// code written using lab 12 as reference

$(document).ready(function() {

  var images = [
    "images/event-path01.JPG",
    "images/event-path02.JPG",
    "images/event-path03.JPG",
    "images/event-path04.JPG",
    "images/event-path05.JPG"];

var captions = [
    "Some of our members happily serving dumplings out our annual Taste of China event",
    "Members of the Cornell community lining up to enjoy some delicious Chinese food",
    "Students participating in our painting workshop at the Johnson Museum of Art",
    "Delicious food prepared by our members at our Thanksgiving Potluck",
    "Members being matched as Bigs and Littles at the beginning of the semester"
];

  var path = 1;


  $("#slideshow-left").on("click", function () {
      if (path ==1){
          path=5;
      }
      else {
          path=path-1;
      }
      $("#slideshow-event").attr("src","images/event-path0"+path+".JPG")
      $('figcaption').text(captions[path-1])
       });

  $("#slideshow-right").on("click", function () {
      if (path ==5){
              path=1;
      }
      else {
          path=path+1;
      }
      $("#slideshow-event").attr("src","images/event-path0"+path+".JPG")
      $('figcaption').text(captions[path-1])
       });
});
