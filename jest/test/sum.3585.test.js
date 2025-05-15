const sum = require('../sum');

test('adds 66 + 84 to equal 150', () => {
  expect(sum(66, 84)).toBe(150);
});