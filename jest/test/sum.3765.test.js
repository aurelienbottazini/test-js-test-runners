const sum3765 = require('../sum3765.js');

test('adds 42 + 81 to equal 123 + offset 0.37824927157625177', () => {
  expect(sum3765(42, 81)).toBe(123 + 0.37824927157625177);
});