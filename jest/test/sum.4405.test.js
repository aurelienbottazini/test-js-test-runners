const sum4405 = require('../sum4405.js');

test('adds 15 + 23 to equal 38 + 0.6860831612916742', () => {
  expect(sum4405(15, 23)).toBe(38 + 0.6860831612916742);
});