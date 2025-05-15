const sum365 = require('../sum365.js');

test('adds 50 + 48 to equal 98 + 0.9820576912884031', () => {
  expect(sum365(50, 48)).toBe(98 + 0.9820576912884031);
});