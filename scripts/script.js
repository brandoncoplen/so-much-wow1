$(function() {
    console.log("document is ready!");

    

    var $start_counter = $( "#event-start" ),
    $drag_counter = $( "#event-drag" ),
    $stop_counter = $( "#event-stop" ),
    counts = [ 0, 0, 0 ];

    $("#doge-meme-pic").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function() {
          calculateWow();
      }
  });

  function calculateWow() {
      var x = $("#doge-meme-pic").position();
      var wow = x.top + x.left;

      if (wow < 500) {

          console.log('not much wow (' + wow + ')');
          $('#wow-output').html('<h2>not much wow (' + wow + ')</h2>')

      } else {
          console.log('so much wow (' + wow + ')!!!!');
          $('#wow-output').text('so much wow (' + wow + ')!!')
      }
  }

});