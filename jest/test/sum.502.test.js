const sum502 = require('../sum502.js');

test('adds 53 + 10 to equal 63 + offset 0.5388963348466559', () => {
  expect(sum502(53, 10)).toBe(63 + 0.5388963348466559);
});