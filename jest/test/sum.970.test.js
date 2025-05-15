const sum = require('../sum');

test('adds 10 + 35 to equal 45', () => {
  expect(sum(10, 35)).toBe(45);
});