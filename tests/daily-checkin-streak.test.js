'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { record } = require('../daily-checkin-streak.js');

test('five consecutive days unlock one reward and ten unlock two', () => {
  let state = { lastDay: null, count: 0, pendingRewards: 0 };
  for (let day = 1; day <= 10; day++) {
    state = record(state, day);
    if (day === 4) assert.deepEqual(state, { lastDay: 4, count: 4, pendingRewards: 0 });
    if (day === 5) assert.deepEqual(state, { lastDay: 5, count: 0, pendingRewards: 1 });
  }
  assert.deepEqual(state, { lastDay: 10, count: 0, pendingRewards: 2 });
});

test('additional check-ins on the same day and earlier dates do not advance the streak', () => {
  const state = { lastDay: 8, count: 4, pendingRewards: 1 };
  assert.strictEqual(record(state, 8), state);
  assert.strictEqual(record(state, 7), state);
});

test('a missed day restarts the streak without losing unclaimed rewards', () => {
  const state = { lastDay: 3, count: 4, pendingRewards: 1 };
  assert.deepEqual(record(state, 5), { lastDay: 5, count: 1, pendingRewards: 1 });
});
