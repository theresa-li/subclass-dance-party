var makeSaltBae = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.html('<img src="https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif"/>');
};

makeSaltBae.prototype = Object.create(Dancer.prototype);
makeSaltBae.prototype.constructor = makeSaltBae;


