const sum = require('../sum');

test('adds 35 + 2 to equal 37', () => {
  expect(sum(35, 2)).toBe(37);
});