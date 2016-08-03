var FadingDancer = function(top, left, timeBetweenSteps) {
  //console.log(this.oldStep);
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.oldStep = Dancer.prototype.step;
  // console.log('inside blinkdancer constructor', this.oldStep);

  this.$node = $('<span class="dancer picture pokemon"><img src="umbreon.png"></span>');
  this.setPosition(top, left);

};

FadingDancer.prototype = Object.create(Dancer.prototype);
FadingDancer.prototype.constructor = FadingDancer;


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

FadingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  var random1 = Math.random() * 200 - 100;
  var random2 = Math.random() * 200 - 100;

  this.top += random1;
  this.left += random2;

  this.top = Math.max(this.top, 0);
  this.left = Math.max(this.left, 0);

  this.top = Math.min(this.top, $('body').height() - 64);
  this.left = Math.min(this.left, $('body').width() - 64);

  //var styleSettings = {
  //  top: this.top,
  //  left: this.left
  //};
  //this.$node.css(styleSettings);
  this.$node.animate({top: this.top, left: this.left, opacity: '0.3'}, "fast");
  this.$node.animate({opacity: '0.8'}, "fast");
  //$newNode.css(styleSettings);
  //$newNode.addClass('heart');
  //$('body').append($newNode);
  
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
   // other effects you can use on a jQuery-wrapped html tag.
  
};
