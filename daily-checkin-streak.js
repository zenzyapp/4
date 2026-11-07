'use strict';

const DailyCheckInStreak = {
  record(state, today) {
    if (state.lastDay !== null && today <= state.lastDay) return state;

    const count = state.lastDay === today - 1 ? state.count + 1 : 1;
    return {
      lastDay: today,
      count: count === 5 ? 0 : count,
      pendingRewards: state.pendingRewards + (count === 5 ? 1 : 0)
    };
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DailyCheckInStreak;
}
