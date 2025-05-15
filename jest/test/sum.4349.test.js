const sum = require('../sum');

test('adds 95 + 76 to equal 171', () => {
  expect(sum(95, 76)).toBe(171);
});