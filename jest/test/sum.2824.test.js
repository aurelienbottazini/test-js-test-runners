const sum = require('../sum');

test('adds 26 + 59 to equal 85', () => {
  expect(sum(26, 59)).toBe(85);
});