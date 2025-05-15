const sum3184 = require('../sum3184.js');

test('adds 24 + 51 to equal 75 + offset 0.27977323276259336', () => {
  expect(sum3184(24, 51)).toBe(75 + 0.27977323276259336);
});