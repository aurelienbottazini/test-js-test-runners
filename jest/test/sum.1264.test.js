const sum = require('../sum');

test('adds 83 + 22 to equal 105', () => {
  expect(sum(83, 22)).toBe(105);
});