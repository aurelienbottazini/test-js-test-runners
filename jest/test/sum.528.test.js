const sum528 = require('../sum528.js');

test('adds 39 + 94 to equal 133 + 0.7546385929911459', () => {
  expect(sum528(39, 94)).toBe(133 + 0.7546385929911459);
});