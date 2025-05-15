const sum = require('../sum');

test('adds 48 + 18 to equal 66', () => {
  expect(sum(48, 18)).toBe(66);
});