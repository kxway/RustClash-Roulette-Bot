const TokenManager = require("./services/TokenManager.js");
const WebSocketClient = require("./services/WebSocketClient.js");
const RouletteRoundHandler = require("./handlers/RouletteRoundHandler.js");
const BettingService = require("./services/BettingService.js");
const BettingManager = require("./services/BettingManager.js");
require('dotenv').config();

(async function start() {
  const tokenManager = new TokenManager();
  await tokenManager.fetchAccessToken();

  const bettingService = new BettingService(tokenManager);
  const bettingManager = new BettingManager(bettingService, process.env.BET_COLOR, process.env.BET_AMOUNT);

  const handlers = {
    "roulette:round": new RouletteRoundHandler()
  };

  handlers["roulette:round"].registerObserver(bettingManager);
  
  const wsClient = new WebSocketClient(tokenManager, handlers);
  wsClient.connect();
})();