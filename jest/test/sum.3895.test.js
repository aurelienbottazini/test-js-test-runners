const sum3895 = require('../sum3895.js');

test('adds 41 + 22 to equal 63 + 0.25664068131815887', () => {
  expect(sum3895(41, 22)).toBe(63 + 0.25664068131815887);
});