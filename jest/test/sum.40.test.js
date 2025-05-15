const sum = require('../sum');

test('adds 3 + 23 to equal 26', () => {
  expect(sum(3, 23)).toBe(26);
});