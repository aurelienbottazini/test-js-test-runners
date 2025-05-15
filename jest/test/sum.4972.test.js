const sum4972 = require('../sum4972.js');

test('adds 44 + 61 to equal 105 + 0.28266616529945165', () => {
  expect(sum4972(44, 61)).toBe(105 + 0.28266616529945165);
});