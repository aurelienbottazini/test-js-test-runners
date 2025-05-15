const sum = require('../sum');

test('adds 76 + 26 to equal 102', () => {
  expect(sum(76, 26)).toBe(102);
});