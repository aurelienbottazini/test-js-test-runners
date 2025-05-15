const sum4453 = require('../sum4453.js');

test('adds 93 + 2 to equal 95 + 0.22164986200514458', () => {
  expect(sum4453(93, 2)).toBe(95 + 0.22164986200514458);
});