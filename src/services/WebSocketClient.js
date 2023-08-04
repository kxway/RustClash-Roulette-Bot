const WebSocket = require("ws");

class WebSocketClient {
  constructor(tokenManager, handlers) {
    this.tokenManager = tokenManager;
    this.handlers = handlers;
    this.ws = new WebSocket("wss://ws.rustclash.com/");
  }

  connect() {
    this.ws.on("open", () => {
      this.ws.send(
        JSON.stringify(["auth", this.tokenManager.getAccessToken()])
      );
    });

    this.ws.on("message", (message) => {
      const data = JSON.parse(message.toString("utf-8"));

      if (Array.isArray(data) && this.handlers.hasOwnProperty(data[0])) {
        this.handlers[data[0]].handle(data);
      }
    });

    this.ws.on("error", (err) => {
      console.error("WebSocket error: %s", err);
    });
  }
}

module.exports = WebSocketClient;
