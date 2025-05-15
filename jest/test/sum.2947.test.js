const sum = require('../sum');

test('adds 6 + 25 to equal 31', () => {
  expect(sum(6, 25)).toBe(31);
});