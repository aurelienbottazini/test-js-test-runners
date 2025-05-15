const sum = require('../sum');

test('adds 9 + 81 to equal 90', () => {
  expect(sum(9, 81)).toBe(90);
});