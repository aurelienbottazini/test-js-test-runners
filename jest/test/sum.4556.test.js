const sum = require('../sum');

test('adds 43 + 72 to equal 115', () => {
  expect(sum(43, 72)).toBe(115);
});