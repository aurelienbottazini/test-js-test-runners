const sum = require('../sum');

test('adds 76 + 19 to equal 95', () => {
  expect(sum(76, 19)).toBe(95);
});