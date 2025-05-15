const sum633 = require('../sum633.js');

test('adds 86 + 32 to equal 118 + 0.05811625778286156', () => {
  expect(sum633(86, 32)).toBe(118 + 0.05811625778286156);
});