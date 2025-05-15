const sum = require('../sum');

test('adds 61 + 29 to equal 90', () => {
  expect(sum(61, 29)).toBe(90);
});