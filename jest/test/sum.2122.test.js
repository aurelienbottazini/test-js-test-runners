const sum = require('../sum');

test('adds 56 + 56 to equal 112', () => {
  expect(sum(56, 56)).toBe(112);
});