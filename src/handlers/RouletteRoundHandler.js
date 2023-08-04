class RouletteRoundHandler {
  constructor() {
    this.observers = [];
  }

  registerObserver(observer) {
    this.observers.push(observer);
  }

  handle(data) {
    if (data[1].status === "OPEN") {
      this.notifyAll("roundOpened", data[1]);
    } else if (data[1].status === "DRAWING") {
      this.notifyAll("roundClosed", data[1]);
    }
  }

  notifyAll(eventType, data) {
    for (const observer of this.observers) {
      if (typeof observer[eventType] === "function") {
        observer[eventType](data);
      }
    }
  }
}

module.exports = RouletteRoundHandler;
