const sum = require('../sum');

test('adds 83 + 98 to equal 181', () => {
  expect(sum(83, 98)).toBe(181);
});