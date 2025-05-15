const sum1485 = require('../sum1485.js');

test('adds 44 + 75 to equal 119 + 0.7371579472716027', () => {
  expect(sum1485(44, 75)).toBe(119 + 0.7371579472716027);
});