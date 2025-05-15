const sum = require('../sum');

test('adds 28 + 84 to equal 112', () => {
  expect(sum(28, 84)).toBe(112);
});