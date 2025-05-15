const sum = require('../sum');

test('adds 34 + 32 to equal 66', () => {
  expect(sum(34, 32)).toBe(66);
});