const sum = require('../sum');

test('adds 7 + 55 to equal 62', () => {
  expect(sum(7, 55)).toBe(62);
});