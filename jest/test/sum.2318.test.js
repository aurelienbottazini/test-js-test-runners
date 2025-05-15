const sum2318 = require('../sum2318.js');

test('adds 90 + 88 to equal 178 + 0.8573097970999309', () => {
  expect(sum2318(90, 88)).toBe(178 + 0.8573097970999309);
});