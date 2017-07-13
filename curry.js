var curryIt = function(uncurried) {
  var parameters = Array.prototype.slice.call(arguments, 1);
  return function() {
    return uncurried.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
};

var greeter = function(greeting, separator, name) {
    console.log(greeting + separator + name);
}

var greetHello = curryIt(greeter, "What's up", ",")("Heidi");
//greetHello("Heidi");