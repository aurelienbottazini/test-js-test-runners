const sum3962 = require('../sum3962.js');

test('adds 12 + 63 to equal 75 + offset 0.21076852546674152', () => {
  expect(sum3962(12, 63)).toBe(75 + 0.21076852546674152);
});