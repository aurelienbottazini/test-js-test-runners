const sum = require('../sum');

test('adds 66 + 0 to equal 66', () => {
  expect(sum(66, 0)).toBe(66);
});