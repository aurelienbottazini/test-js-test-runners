const sum = require('../sum');

test('adds 38 + 52 to equal 90', () => {
  expect(sum(38, 52)).toBe(90);
});