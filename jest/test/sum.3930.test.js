const sum3930 = require('../sum3930.js');

test('adds 33 + 28 to equal 61 + offset 0.7860098875819783', () => {
  expect(sum3930(33, 28)).toBe(61 + 0.7860098875819783);
});