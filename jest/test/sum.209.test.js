const sum = require('../sum');

test('adds 98 + 94 to equal 192', () => {
  expect(sum(98, 94)).toBe(192);
});