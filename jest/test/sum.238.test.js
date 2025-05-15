const sum = require('../sum');

test('adds 70 + 35 to equal 105', () => {
  expect(sum(70, 35)).toBe(105);
});