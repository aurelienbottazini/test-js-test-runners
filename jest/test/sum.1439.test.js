const sum = require('../sum');

test('adds 31 + 81 to equal 112', () => {
  expect(sum(31, 81)).toBe(112);
});