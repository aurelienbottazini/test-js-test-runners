const sum1601 = require('../sum1601.js');

test('adds 34 + 73 to equal 107 + offset 0.6436269589160065', () => {
  expect(sum1601(34, 73)).toBe(107 + 0.6436269589160065);
});