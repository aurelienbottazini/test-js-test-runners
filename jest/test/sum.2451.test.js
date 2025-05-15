const sum = require('../sum');

test('adds 7 + 28 to equal 35', () => {
  expect(sum(7, 28)).toBe(35);
});