const sum = require('../sum');

test('adds 40 + 50 to equal 90', () => {
  expect(sum(40, 50)).toBe(90);
});