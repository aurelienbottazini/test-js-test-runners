const sum = require('../sum');

test('adds 17 + 49 to equal 66', () => {
  expect(sum(17, 49)).toBe(66);
});