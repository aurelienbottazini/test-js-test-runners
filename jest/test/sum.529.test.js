const sum = require('../sum');

test('adds 23 + 65 to equal 88', () => {
  expect(sum(23, 65)).toBe(88);
});