const sum = require('../sum');

test('adds 60 + 40 to equal 100', () => {
  expect(sum(60, 40)).toBe(100);
});