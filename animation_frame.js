(function() {
  var _ref;
    if ((_ref = window.requestAnimationFrame) != null) {
    _ref;
  } else {
    window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
      console.log("Your browser does not support requestAnimationFrame.  Falling back to setTimeout.");
      return window.setTimeout(callback, 1000 / 60);
    };
  };
}).call(this);
