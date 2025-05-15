const sum = require('../sum');

test('adds 65 + 23 to equal 88', () => {
  expect(sum(65, 23)).toBe(88);
});