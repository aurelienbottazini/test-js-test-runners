const sum = require('../sum');

test('adds 88 + 79 to equal 167', () => {
  expect(sum(88, 79)).toBe(167);
});