const sum2687 = require('../sum2687.js');

test('adds 15 + 95 to equal 110 + 0.6609795672623248', () => {
  expect(sum2687(15, 95)).toBe(110 + 0.6609795672623248);
});