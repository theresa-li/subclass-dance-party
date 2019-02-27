var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="https://media.giphy.com/media/d2nw7n9WSqAi4/giphy.gif" height="240" width="240">');


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

//deligates methods from make dancer
makeBlinkyDancer.prototype = Object.create(Dancer.prototype);

//points constructor to makeBlinkyDancer
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//methods
makeBlinkyDancer.prototype.step = function(timeBetweenSteps){
    // call the old version of step at the beginning of any call to this new version of step
    // Dancer.prototype.step.call(this);
    setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
};

makeBlinkyDancer.prototype.lineUp = function(object, i){
  object.setPosition(750, 50 + (i*150));
}