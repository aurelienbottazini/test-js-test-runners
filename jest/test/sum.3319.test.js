const sum = require('../sum');

test('adds 0 + 31 to equal 31', () => {
  expect(sum(0, 31)).toBe(31);
});