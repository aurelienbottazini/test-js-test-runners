const sum = require('../sum');

test('adds 80 + 0 to equal 80', () => {
  expect(sum(80, 0)).toBe(80);
});