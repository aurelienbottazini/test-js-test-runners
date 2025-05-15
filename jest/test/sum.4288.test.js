const sum = require('../sum');

test('adds 84 + 32 to equal 116', () => {
  expect(sum(84, 32)).toBe(116);
});