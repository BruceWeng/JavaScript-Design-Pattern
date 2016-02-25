var Subject = function () {
  var observers = [];

  return {
    subscribeObserver: function (observer) {
      observers.push(observer);
    },
    unsubscribeObserver: function (observer) {
      var index = observers.indexOf(observer);
      if (index > -1) {
        observers.splice(index, 1);
      }
    },
    notifyObserver: function (observer) {
      var index = observers.indexOf(observer);
      if (index > -1) {
        observers[index].notify(index);
      }
    },
    notifyAllObservers: function () {
      observers.forEach(function (obs, i) {
        obs.notify(i);
      });
    }
  };
};

var Observer = function () {
  return {
    notify: function (index) {
      console.log("Observer " + index + " is notified!");
    }
  }
};

var subject = new Subject();
var observer0 = new Observer();
var observer1 = new Observer();

subject.subscribeObserver(observer0);
subject.subscribeObserver(observer1);

subject.notifyObserver(observer1);

subject.notifyAllObservers();

subject.unsubscribeObserver(observer1);

subject.notifyObserver(observer1);
subject.notifyAllObservers();