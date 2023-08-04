class BettingManager {
  constructor(bettingService, color, amount) {
    this.bettingService = bettingService;
    this.color = color;
    this.amount = amount;
    /* this.stopLoss = stopLoss; */
    this.multiply = 1;
  }

  roundOpened(data) {
    const betDetails = {
      amount: this.amount * this.multiply,
      gameId: data.id,
      option: this.color,
    };

    this.bettingService.placeBet(betDetails);
  }

  roundClosed(data) {
    const outcome = data.outcome;

    if (
      (this.color === "RED" && outcome >= 1 && outcome <= 7) ||
      (this.color === "BLACK" && outcome >= 8 && outcome <= 14) ||
      (this.color === "GREEN" && outcome === 0)
    ) {
      console.log(`Ganhou a aposta! Resultado: ${outcome}`);
      this.multiply = 1;
    } else {
      console.log(`Perdeu a aposta! Resultado: ${outcome}`);
      this.multiply *= 2; // Dobrar a aposta
    }
  }
}

module.exports = BettingManager;
