var wow;
$(function() {
  console.log("document is ready!");

  

 

  $("#doge-meme-pic").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function() {
          calculateWow();
      }
  });
  
  
  function calculateWow() {
      var x = $("#doge-meme-pic").position();
        wow = x.top + x.left;

      if (wow < 500) {

          console.log('not much wow (' + wow + ')');
          $('#wow-output').html('<h2>not much wow (' + wow + ')</h2>')

      } else {
          console.log('so much wow (' + wow + ')!!!!');
          $('#wow-output').text('so much wow (' + wow + ')!!')
      }
  }

});

$("#guess").keyup(function(e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    $(this).text("remember, no letters!");
});

$('#submitBtn').click(function() {
    guessed = $('#guess').val();

    btnMsg = "Your guess is: ";
    $('#btnOutput').append(btnMsg + guessed);

    console.log(btnMsg);
});

$('#resultBtn').click(function() {
    
    result = wow + guessed;

    rBtnMsg = "Your result is: ";
    $('#result').append(rBtnMsg + result);

    console.log(rBtnMsg);
});





