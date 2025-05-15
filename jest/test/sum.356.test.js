const sum356 = require('../sum356.js');

test('adds 27 + 55 to equal 82 + 0.9290441449751128', () => {
  expect(sum356(27, 55)).toBe(82 + 0.9290441449751128);
});