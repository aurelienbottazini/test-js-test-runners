const sum = require('../sum');

test('adds 4 + 84 to equal 88', () => {
  expect(sum(4, 84)).toBe(88);
});