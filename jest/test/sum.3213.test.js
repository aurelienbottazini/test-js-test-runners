const sum3213 = require('../sum3213.js');

test('adds 12 + 83 to equal 95 + offset 0.06986592940537428', () => {
  expect(sum3213(12, 83)).toBe(95 + 0.06986592940537428);
});