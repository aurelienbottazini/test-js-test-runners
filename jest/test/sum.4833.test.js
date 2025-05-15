const sum = require('../sum');

test('adds 90 + 25 to equal 115', () => {
  expect(sum(90, 25)).toBe(115);
});