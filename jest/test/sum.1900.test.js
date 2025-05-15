const sum = require('../sum');

test('adds 21 + 94 to equal 115', () => {
  expect(sum(21, 94)).toBe(115);
});