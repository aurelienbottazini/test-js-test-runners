const sum = require('../sum');

test('adds 30 + 35 to equal 65', () => {
  expect(sum(30, 35)).toBe(65);
});