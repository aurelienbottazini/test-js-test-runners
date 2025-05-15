const sum4881 = require('../sum4881.js');

test('adds 0 + 7 to equal 7 + 0.827164978036123', () => {
  expect(sum4881(0, 7)).toBe(7 + 0.827164978036123);
});