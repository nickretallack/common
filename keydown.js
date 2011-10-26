(function() {
  window.pressed_keys = {};
  window.key_name = function(event) {
    return key_codes[event.which] || String.fromCharCode(event.which).toLowerCase();
  };
  $(document).bind("keydown", function(event) {
    return pressed_keys[key_name(event)] = true;
  });
  $(document).bind("keyup", function(event) {
    return pressed_keys[key_name(event)] = false;
  });
}).call(this);
