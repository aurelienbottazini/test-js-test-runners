const sum = require('../sum');

test('adds 74 + 40 to equal 114', () => {
  expect(sum(74, 40)).toBe(114);
});