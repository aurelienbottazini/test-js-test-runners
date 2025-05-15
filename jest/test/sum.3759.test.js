const sum = require('../sum');

test('adds 1 + 65 to equal 66', () => {
  expect(sum(1, 65)).toBe(66);
});