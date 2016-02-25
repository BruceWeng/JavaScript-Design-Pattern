var TeslaModelS = function () {
  this.numWheels = 4;
  this.manufacturer = "Tesla";
  this.make = "Model S";
}

var Car = function () {
  var go = function () {
    console.log("Let's Go!");
  }

  var stop = function () {
    console.log("Let's Stop!!!");
  }

  return {
    pressBrakePedal: stop,
    pressGasPedal: go

  }
}

TeslaModelS.prototype = new Car();

var Tesla = new TeslaModelS();

Tesla.pressGasPedal();
Tesla.pressBrakePedal();
