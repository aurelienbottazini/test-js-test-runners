const sum4240 = require('../sum4240.js');

test('adds 61 + 56 to equal 117 + 0.8538422391167384', () => {
  expect(sum4240(61, 56)).toBe(117 + 0.8538422391167384);
});