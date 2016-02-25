var Printer = (function () {
  var printerInstance;

  var create = function () {
    var ink = 100;
    var print = function () {
      console.log("Now printing!");
      ink -= 10;
      console.log("Ink remaining: " + ink);
    }

    var turnOn = function () {
      console.log("Warmming up....");
      console.log("Checking for paper...");
    }

    return {
      print: print,
      turnOn: turnOn
    }
  }

  return {
    getInstance: function () {
      if(!printerInstance) {
        printerInstance = create();
      }
      return printerInstance;
    },
  };
})(); // a module

var officePrinter1 = Printer.getInstance();
var officePrinter2 = Printer.getInstance();
console.log("Same instance? " + (officePrinter1 === officePrinter2));
officePrinter1.turnOn();
officePrinter1.print();
officePrinter2.turnOn();
officePrinter2.print();