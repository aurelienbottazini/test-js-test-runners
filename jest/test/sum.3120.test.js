const sum = require('../sum');

test('adds 33 + 28 to equal 61', () => {
  expect(sum(33, 28)).toBe(61);
});