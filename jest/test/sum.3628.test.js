const sum = require('../sum');

test('adds 70 + 15 to equal 85', () => {
  expect(sum(70, 15)).toBe(85);
});