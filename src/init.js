$(document).ready(function() {
  window.dancers = [];
  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
  
  
  $('.lineUp').on('click', function(event) {
    var $bodyWidth = $('body').width();
    console.log($bodyWidth);
    var $bodyHeight = $('body').height();
    var $resizedbodyWidth = $('body').width();
    var totalWidth = window.dancers.length+1;
    var division = $bodyWidth/totalWidth;
    window.dancers = shuffle(window.dancers);
    
    
    for (var i = 0; i < totalWidth-1; i++) {
      dancers[i].lineUp($bodyHeight/2, 100/totalWidth*0.01*$bodyWidth*(i+1));
      //dancers[i].lineUp($bodyHeight/2, i * division + division * (1/(totalWidth)));
    }
  });
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    //console.log(dancerMakerFunctionName)
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.max(500, (Math.random() * 2000))
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });
});

