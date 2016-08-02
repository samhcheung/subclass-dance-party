var FunnyDancer = function(top, left, timeBetweenSteps) {
  //console.log(this.oldStep);
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.oldStep = Dancer.prototype.step;
  // console.log('inside blinkdancer constructor', this.oldStep);

  this.$node = $('<span class="dancer picture"><img src="http://cdn.bulbagarden.net/upload/a/aa/Flying_Pikachu_Dash.png"></span>')
  this.setPosition(top, left);

};

FunnyDancer.prototype = Object.create(Dancer.prototype);
FunnyDancer.prototype.constructor = FunnyDancer;


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

FunnyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  $('img').width(300);
  Dancer.prototype.step.call(this);

  this.$node.animate({top:'+=40'}, 1000);
  this.$node.animate({top:'-=40'}, 1000);
  //console.log('width', $('.picture').width());


// $('.picture').height(100);
  //console.log('i am inside FunnyDancer')
  
  //setTimeout(this.step, this.timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
   // other effects you can use on a jQuery-wrapped html tag.
  
};
