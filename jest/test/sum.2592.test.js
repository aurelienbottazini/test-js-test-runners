const sum = require('../sum');

test('adds 54 + 34 to equal 88', () => {
  expect(sum(54, 34)).toBe(88);
});