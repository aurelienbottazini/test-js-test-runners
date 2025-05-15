const sum = require('../sum');

test('adds 32 + 59 to equal 91', () => {
  expect(sum(32, 59)).toBe(91);
});