const sum = require('../sum');

test('adds 58 + 32 to equal 90', () => {
  expect(sum(58, 32)).toBe(90);
});