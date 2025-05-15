const sum = require('../sum');

test('adds 80 + 25 to equal 105', () => {
  expect(sum(80, 25)).toBe(105);
});