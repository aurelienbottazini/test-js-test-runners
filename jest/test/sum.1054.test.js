const sum1054 = require('../sum1054.js');

test('adds 14 + 94 to equal 108 + offset 0.958282726617835', () => {
  expect(sum1054(14, 94)).toBe(108 + 0.958282726617835);
});