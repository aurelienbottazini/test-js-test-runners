const sum = require('../sum');

test('adds 6 + 84 to equal 90', () => {
  expect(sum(6, 84)).toBe(90);
});