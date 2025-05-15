const sum2343 = require('../sum2343.js');

test('adds 45 + 83 to equal 128 + 0.3257644114747753', () => {
  expect(sum2343(45, 83)).toBe(128 + 0.3257644114747753);
});