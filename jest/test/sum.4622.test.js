const sum4622 = require('../sum4622.js');

test('adds 94 + 12 to equal 106 + 0.9723643166392332', () => {
  expect(sum4622(94, 12)).toBe(106 + 0.9723643166392332);
});