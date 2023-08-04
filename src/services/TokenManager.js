const axios = require("axios");
require('dotenv').config();

class TokenManager {
  constructor() {
    this.accessToken = null;
  }

  async fetchAccessToken() {
    try {
      const response = await axios.get(
        "https://rustclash.com/api/auth/access-token",
        {
          headers: {
            Cookie: `refresh_token=${process.env.REFRESH_TOKEN}`,
          },
        }
      );

      this.accessToken = response.data.accessToken;
    } catch (error) {
      console.error(`Error in fetchAccessToken: ${error}`);
    }
  }

  getAccessToken() {
    if (!this.accessToken) {
      throw new Error("Access token is not fetched yet.");
    }
    return this.accessToken;
  }
}

module.exports = TokenManager;
