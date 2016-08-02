var GrowingDancer = function(top, left, timeBetweenSteps) {
  //console.log(this.oldStep);
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.oldStep = Dancer.prototype.step;
  // console.log('inside blinkdancer constructor', this.oldStep);
  this.$node.addClass('heart');
  this.$node.removeClass('dancer');
};

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

GrowingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  $newNode = $('<span class="dancer"></span>');
  //this.top = (this.top + 150) % $('body').height();
  //this.left = (this.left + 150) % $('body').width();
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
  this.$node.animate({opacity: '0.3'}, "slow");
  this.$node.animate({opacity: '0.8'}, "slow");
  //$newNode.css(styleSettings);
  //$newNode.addClass('heart');
  //$('body').append($newNode);
  
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
   // other effects you can use on a jQuery-wrapped html tag.
  
};
