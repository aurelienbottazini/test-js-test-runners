const sum4387 = require('../sum4387.js');

test('adds 55 + 79 to equal 134 + 0.4221649383323428', () => {
  expect(sum4387(55, 79)).toBe(134 + 0.4221649383323428);
});