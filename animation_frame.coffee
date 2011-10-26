# shim layer with setTimeout fallback
window.requestAnimationFrame ?= (
    window.webkitRequestAnimationFrame  or
    window.mozRequestAnimationFrame     or
    window.oRequestAnimationFrame       or
    window.msRequestAnimationFrame      or
    (callback, element) ->
        console.log "Your browser does not support requestAnimationFrame.  Falling back to setTimeout."
        window.setTimeout callback, 1000 / 60
)
