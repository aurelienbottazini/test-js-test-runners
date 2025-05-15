const sum4769 = require('../sum4769.js');

test('adds 80 + 49 to equal 129 + 0.21040219312460273', () => {
  expect(sum4769(80, 49)).toBe(129 + 0.21040219312460273);
});