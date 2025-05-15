const sum = require('../sum');

test('adds 20 + 11 to equal 31', () => {
  expect(sum(20, 11)).toBe(31);
});