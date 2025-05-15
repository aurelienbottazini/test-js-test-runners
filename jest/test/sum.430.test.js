const sum430 = require('../sum430.js');

test('adds 50 + 67 to equal 117 + 0.3720170794967027', () => {
  expect(sum430(50, 67)).toBe(117 + 0.3720170794967027);
});