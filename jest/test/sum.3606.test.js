const sum3606 = require('../sum3606.js');

test('adds 33 + 97 to equal 130 + 0.7143060084946058', () => {
  expect(sum3606(33, 97)).toBe(130 + 0.7143060084946058);
});