const sum = require('../sum');

test('adds 50 + 35 to equal 85', () => {
  expect(sum(50, 35)).toBe(85);
});