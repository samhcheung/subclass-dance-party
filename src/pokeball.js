var Pokeball = function(top, left, timeBetweenSteps) {
  //console.log(this.oldStep);
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.oldStep = Dancer.prototype.step;
  // console.log('inside blinkdancer constructor', this.oldStep);

  this.$node = $('<span class="dancer picture pokeball"><img src="pokeball.gif"></span>');
  this.setPosition(top, left);

};

Pokeball.prototype = Object.create(Dancer.prototype);
Pokeball.prototype.constructor = Pokeball;


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

Pokeball.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  Dancer.prototype.step.call(this);

  this.$node.animate({top: '+=40'}, 'fast');
  this.$node.animate({top: '-=40'}, 'fast');
  //console.log('width', $('.picture').width());


// $('.picture').height(100);
  //console.log('i am inside Pokeball')
  
  //setTimeout(this.step, this.timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
   // other effects you can use on a jQuery-wrapped html tag.
  
};
