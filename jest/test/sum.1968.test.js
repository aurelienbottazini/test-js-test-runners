const sum1968 = require('../sum1968.js');

test('adds 96 + 40 to equal 136 + 0.2774442246946014', () => {
  expect(sum1968(96, 40)).toBe(136 + 0.2774442246946014);
});