var Exposer = function () {
  var privateVariable = 0;

  var privateMethod = function () {
    console.log("Inside a private method!");
    privateVariable++;
  }

  var methodToExpose = function () {
    console.log("This is a method I want to expose!");
  }

  var otherMethodIWantToExpose = function () {
    privateMethod();
  }

  return {
    first: methodToExpose,
    second: otherMethodIWantToExpose
  };
}

var exposer = new Exposer();
exposer.first();
exposer.second();
exposer.methodToExpose;