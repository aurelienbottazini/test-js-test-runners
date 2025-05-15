const sum = require('../sum');

test('adds 18 + 70 to equal 88', () => {
  expect(sum(18, 70)).toBe(88);
});