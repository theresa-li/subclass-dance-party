var makePepper = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.html('<img src="https://media.giphy.com/media/41fUyqr6zJIjEaEc7p/source.gif" height="226" width="400">');
};

makePepper.prototype = Object.create(Dancer.prototype);
makePepper.prototype.constructor = makePepper;

makePepper.prototype.lineUp = function(object, i){
  object.setPosition(20, i*150);
}