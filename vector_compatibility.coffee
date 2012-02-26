NODEJS = exports?

if NODEJS
    Box2D = require('./common/box2d')
    Box2D.b2Vec2::clone = Box2D.b2Vec2::Copy
    Box2D.b2Vec2::multiplyScalar = Box2D.b2Vec2::Multiply
    Vector = Box2D.b2Vec2
    global = exports
else
    global = window
    if global.THREE? and global.b2Vec2?
        for name, method of b2Vec2.prototype
            continue if name == 'constructor'
            THREE.Vector2.prototype[name] = method
        global.b2Vec2 = THREE.Vector2
        Vector = b2Vec2
    else if THREE?
        Vector = THREE.Vector2
    else if b2Vec2?
        Vector = b2Vec2

radians_factor = Math.PI / 180.0

Vector.from = (other) -> V other.x, other.y
Vector::components = -> [@x, @y]
Vector::scale = (scalar) -> @clone().multiplyScalar scalar
Vector::plus = (other) -> @clone().addSelf other
Vector::minus = (other) -> @plus other.scale -1
Vector::times = (other) -> @clone().er.scale -1
Vector::three = -> new THREE.Vector3 @components()...
Vector::rotate = (angle) ->
    result = @clone()
    result.MulM new b2Mat22 angle * radians_factor
    result

global.V = -> new Vector arguments...
global.Vector = Vector
