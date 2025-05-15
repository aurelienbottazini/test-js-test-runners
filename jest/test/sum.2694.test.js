const sum = require('../sum');

test('adds 40 + 40 to equal 80', () => {
  expect(sum(40, 40)).toBe(80);
});