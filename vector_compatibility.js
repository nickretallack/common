(function() {
  var Box2D, NODEJS, Vector, global, method, name, radians_factor, _ref;
  NODEJS = typeof exports !== "undefined" && exports !== null;
  if (NODEJS) {
    Box2D = require('./common/box2d');
    Box2D.b2Vec2.prototype.clone = Box2D.b2Vec2.prototype.Copy;
    Box2D.b2Vec2.prototype.multiplyScalar = Box2D.b2Vec2.prototype.Multiply;
    Vector = Box2D.b2Vec2;
    global = exports;
  } else {
    global = window;
    if ((global.THREE != null) && (global.b2Vec2 != null)) {
      _ref = b2Vec2.prototype;
      for (name in _ref) {
        method = _ref[name];
        if (name === 'constructor') {
          continue;
        }
        THREE.Vector2.prototype[name] = method;
      }
      global.b2Vec2 = THREE.Vector2;
      Vector = b2Vec2;
    } else if (typeof THREE !== "undefined" && THREE !== null) {
      Vector = THREE.Vector2;
    } else if (typeof b2Vec2 !== "undefined" && b2Vec2 !== null) {
      Vector = b2Vec2;
    }
  }
  radians_factor = Math.PI / 180.0;
  Vector.from = function(other) {
    return V(other.x, other.y);
  };
  Vector.prototype.components = function() {
    return [this.x, this.y];
  };
  Vector.prototype.scale = function(scalar) {
    return this.clone().multiplyScalar(scalar);
  };
  Vector.prototype.plus = function(other) {
    return this.clone().addSelf(other);
  };
  Vector.prototype.minus = function(other) {
    return this.plus(other.scale(-1));
  };
  Vector.prototype.times = function(other) {
    return this.clone().er.scale(-1);
  };
  Vector.prototype.three = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return typeof result === "object" ? result : child;
    })(THREE.Vector3, this.components(), function() {});
  };
  Vector.prototype.rotate = function(angle) {
    var result;
    result = this.clone();
    result.MulM(new b2Mat22(angle * radians_factor));
    return result;
  };
  global.V = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return typeof result === "object" ? result : child;
    })(Vector, arguments, function() {});
  };
  global.Vector = Vector;
}).call(this);
