const sum = require('../sum');

test('adds 18 + 2 to equal 20', () => {
  expect(sum(18, 2)).toBe(20);
});