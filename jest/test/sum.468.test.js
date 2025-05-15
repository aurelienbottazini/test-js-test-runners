const sum = require('../sum');

test('adds 1 + 87 to equal 88', () => {
  expect(sum(1, 87)).toBe(88);
});