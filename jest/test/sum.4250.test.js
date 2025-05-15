const sum = require('../sum');

test('adds 40 + 59 to equal 99', () => {
  expect(sum(40, 59)).toBe(99);
});