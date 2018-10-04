export default {
  debug: true,
  state: {
    users: ["Benji", "Tim", "Karen", "Melissa", "Andreia", "Glenn", "Kelly"],
    bets: [
      {
        id: 1,
        text: "Benji can't build a coffee bet Vue app in one night",
        between: ["Benji", "Tim"],
        winner: null
      },
      {
        id: 2,
        text: "The final egg will hatch",
        between: ["Benji", "Melissa"],
        winner: null
      }
    ]
  },

  getUsers() {
    return this.state.users.map(userName => {
      const owed = this.betsWonBy(userName)
        .map(bet => bet.between.filter(u => userName !== u))
        .flat();

      const owes = this.betsLostBy(userName)
        .map(bet => bet.between.filter(u => userName !== u))
        .flat();

      return {
        name: userName,
        owes,
        owed
      };
    });
  },

  getInprogressBets() {
    return this.state.bets.filter(bet => bet.winner === null);
  },

  getCompletedBets() {
    return this.state.bets.filter(bet => bet.winner !== null);
  },

  betsWonBy(userName) {
    return this.state.bets.filter(bet => bet.winner === userName);
  },

  betsLostBy(userName) {
    return this.getCompletedBets().filter(
      bet => bet.winner !== userName && bet.between.includes(userName)
    );
  },

  addUser(name) {
    this.state.users.push(name);
  },

  placeBet(bet) {
    const id = this.state.bets.length + 1;
    this.state.bets.push(Object.assign({}, bet, { id, winner: null }));
  },

  completeBet(bet, winner) {
    bet.winner = winner;
  },

  reinstateBet(bet) {
    bet.winner = null;
  }
};
