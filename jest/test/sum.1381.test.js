const sum = require('../sum');

test('adds 47 + 94 to equal 141', () => {
  expect(sum(47, 94)).toBe(141);
});