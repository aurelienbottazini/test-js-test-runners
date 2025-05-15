const sum4075 = require('../sum4075.js');

test('adds 95 + 49 to equal 144 + 0.3287049379165352', () => {
  expect(sum4075(95, 49)).toBe(144 + 0.3287049379165352);
});