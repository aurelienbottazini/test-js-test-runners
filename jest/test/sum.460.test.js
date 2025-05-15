const sum = require('../sum');

test('adds 29 + 81 to equal 110', () => {
  expect(sum(29, 81)).toBe(110);
});