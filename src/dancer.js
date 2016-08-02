// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);

};

Dancer.prototype.step = function() {
  //console.log('i am in step of Dancer',this);
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.lineUp = function(height, width) {
  //this.setPosition(500, width);
  //this.$node.css({position: 'relative', top: height, left: 0});
  //this.$node.animate({top:'500', left: width}, 100);
  //width = width+ 0.5*this.$node.width();
  console.log(width);
  width = width - this.$node.width()*0.5;
  this.$node.animate({top: height, left: width, leaveTransforms:true }, 1000);
  //this.$node.animate({left: '+50%', leaveTransforms:true }, 1000);
};

Dancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left,
  };
  this.$node.css(styleSettings);
};

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };