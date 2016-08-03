$(document).ready(function() {
  window.dancers = [];
  var shuffle = function(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };



  $('.lineUp').on('click', function(event) {
    var $bodyWidth = $('body').width();
    
    var $bodyHeight = $('body').height();
    var totalWidth = window.dancers.length + 1;
    window.dancers = shuffle(window.dancers);
    
    for (var i = 0; i < totalWidth - 1; i++) {
      dancers[i].lineUp($bodyHeight / 2, 1 / totalWidth * $bodyWidth * (i + 1));

    }
  });

  $('.random').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      // console.log(window.dancers[i].oldLeft, window.dancers[i].oldRight);
      window.dancers[i].lineUp(window.dancers[i].oldTop, window.dancers[i].oldLeft);
      dancers[i].top = dancers[i].oldTop;
      dancers[i].left = dancers[i].oldLeft;
    }
  });

  var checkNeighbors = function(dancer) {

    var killEnemies = function(tokill) {
      var distance = Math.sqrt(Math.pow(window.dancers[i].top - dancer.top, 2) + Math.pow(window.dancers[i].left - dancer.left, 2));
      if (distance < 125) {
        tokill.$node.addClass('killed');
        var $animation = $('<span class="picture"><img height="100" width="130" src=captureanimation.gif></span>');
        var styleSettings = {
          top: tokill.top,
          left: tokill.left,
        };
        $('body').append($animation);
        $animation.fadeIn();
        $animation.css(styleSettings);
        setTimeout(function() {
          $animation.remove();
          $animation.fadeOut();
        }, 1000);
        
        console.log('killed!');
      }
    };

    for (var i = 0; i < window.dancers.length; i++) {
      var type = dancer.$node.hasClass('pokemon') ? 'pokemon' : 'pokeball';
      if (type === 'pokemon' && window.dancers[i].$node.hasClass('pokeball')) {
        killEnemies(dancer);
      }
      if (type === 'pokeball' && window.dancers[i].$node.hasClass('pokemon')) {
        killEnemies(window.dancers[i]);
      }
    }
    var newArr = [];
    for (var i = 0; i < window.dancers.length; i++) {
      if (!window.dancers[i].$node.hasClass('killed')) {
        newArr.push(window.dancers[i]);
      } 
    }
    window.dancers = newArr;
    $('.killed').fadeOut();
    setTimeout($('.killed').remove.bind(this), 1000);
    // $('.killed').remove();

  };

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
    // $('.dancer').off("click");
    dancer.$node.on('mouseover', function(event) {
      
      var random1 = Math.random() * 200 - 100;
      var random2 = Math.random() * 200 - 100;
      dancer.top += random1;
      dancer.left += random2;
     $(this).animate({top: dancer.top, left: dancer.left, leaveTransforms:true}, 'fast');
     checkNeighbors(dancer);
    });

  });
});

