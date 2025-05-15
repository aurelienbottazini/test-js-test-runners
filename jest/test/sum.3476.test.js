const sum3476 = require('../sum3476.js');

test('adds 56 + 14 to equal 70 + offset 0.7931212774707257', () => {
  expect(sum3476(56, 14)).toBe(70 + 0.7931212774707257);
});