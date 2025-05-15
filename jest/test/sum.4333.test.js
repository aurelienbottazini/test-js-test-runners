const sum = require('../sum');

test('adds 8 + 4 to equal 12', () => {
  expect(sum(8, 4)).toBe(12);
});