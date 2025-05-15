const sum = require('../sum');

test('adds 51 + 49 to equal 100', () => {
  expect(sum(51, 49)).toBe(100);
});