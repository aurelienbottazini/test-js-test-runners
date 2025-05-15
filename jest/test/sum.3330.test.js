const sum = require('../sum');

test('adds 20 + 95 to equal 115', () => {
  expect(sum(20, 95)).toBe(115);
});