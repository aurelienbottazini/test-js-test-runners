const sum = require('../sum');

test('adds 75 + 40 to equal 115', () => {
  expect(sum(75, 40)).toBe(115);
});