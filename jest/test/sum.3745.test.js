const sum = require('../sum');

test('adds 87 + 27 to equal 114', () => {
  expect(sum(87, 27)).toBe(114);
});