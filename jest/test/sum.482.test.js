const sum482 = require('../sum482.js');

test('adds 20 + 23 to equal 43 + offset 0.8828732878479306', () => {
  expect(sum482(20, 23)).toBe(43 + 0.8828732878479306);
});