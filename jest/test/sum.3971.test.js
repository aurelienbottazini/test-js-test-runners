const sum3971 = require('../sum3971.js');

test('adds 70 + 95 to equal 165 + 0.9438932790985354', () => {
  expect(sum3971(70, 95)).toBe(165 + 0.9438932790985354);
});