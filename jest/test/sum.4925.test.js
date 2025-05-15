const sum4925 = require('../sum4925.js');

test('adds 15 + 95 to equal 110 + offset 0.906850600813788', () => {
  expect(sum4925(15, 95)).toBe(110 + 0.906850600813788);
});