const sum = require('../sum');

test('adds 19 + 34 to equal 53', () => {
  expect(sum(19, 34)).toBe(53);
});