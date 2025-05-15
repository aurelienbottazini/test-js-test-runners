const sum3845 = require('../sum3845.js');

test('adds 10 + 6 to equal 16 + 0.8853326998552216', () => {
  expect(sum3845(10, 6)).toBe(16 + 0.8853326998552216);
});