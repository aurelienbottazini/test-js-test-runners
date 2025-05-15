const sum4335 = require('../sum4335.js');

test('adds 79 + 63 to equal 142 + 0.9684570572993111', () => {
  expect(sum4335(79, 63)).toBe(142 + 0.9684570572993111);
});