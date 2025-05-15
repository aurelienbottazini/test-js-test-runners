const sum1072 = require('../sum1072.js');

test('adds 1 + 73 to equal 74 + 0.3284665247444509', () => {
  expect(sum1072(1, 73)).toBe(74 + 0.3284665247444509);
});