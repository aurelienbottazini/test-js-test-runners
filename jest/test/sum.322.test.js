const sum = require('../sum');

test('adds 11 + 88 to equal 99', () => {
  expect(sum(11, 88)).toBe(99);
});