const sum3750 = require('../sum3750.js');

test('adds 54 + 66 to equal 120 + 0.6174097919071572', () => {
  expect(sum3750(54, 66)).toBe(120 + 0.6174097919071572);
});