const sum = require('../sum');

test('adds 26 + 86 to equal 112', () => {
  expect(sum(26, 86)).toBe(112);
});