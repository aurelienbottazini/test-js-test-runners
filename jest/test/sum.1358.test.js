const sum = require('../sum');

test('adds 15 + 28 to equal 43', () => {
  expect(sum(15, 28)).toBe(43);
});