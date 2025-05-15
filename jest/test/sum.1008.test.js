const sum1008 = require('../sum1008.js');

test('adds 77 + 73 to equal 150 + offset 0.20065978861768352', () => {
  expect(sum1008(77, 73)).toBe(150 + 0.20065978861768352);
});