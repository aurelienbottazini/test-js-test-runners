const sum3658 = require('../sum3658.js');

test('adds 36 + 79 to equal 115 + offset 0.5692785979613042', () => {
  expect(sum3658(36, 79)).toBe(115 + 0.5692785979613042);
});