const axios = require("axios");

class BettingService {
  constructor(tokenManager) {
    this.tokenManager = tokenManager;
  }

  /**
   * @typedef {Object} BetDetails
   * @property {number} amount - The amount to bet.
   * @property {number} gameId - The ID of the game to bet on.
   * @property {"BLACK"|"RED"} option - The betting option.
   */

  async placeBet(betDetails, retryCount = 0) {
    try {
      const response = await axios.post(
        "https://rustclash.com/api/roulette/bet",
        betDetails,
        {
          headers: {
            Authorization: `Bearer ${this.tokenManager.getAccessToken()}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error(`Error placing bet: ${error}`);
      if (retryCount < 1) {
        await this.tokenManager.fetchAccessToken();
        return this.placeBet(betDetails, retryCount + 1);
      } else {
        console.error(`Failed to place bet after 2 attempts.`);
      }
    }
  }
}

module.exports = BettingService;
