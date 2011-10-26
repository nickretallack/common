window.pressed_keys = {}
window.key_name = (event) ->
    key_codes[event.which] or String.fromCharCode(event.which).toLowerCase()

$(document).bind "keydown", (event) ->
    pressed_keys[key_name(event)] = true

$(document).bind "keyup", (event) ->
    pressed_keys[key_name(event)] = false

