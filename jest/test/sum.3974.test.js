const sum = require('../sum');

test('adds 35 + 10 to equal 45', () => {
  expect(sum(35, 10)).toBe(45);
});