const sum4754 = require('../sum4754.js');

test('adds 16 + 81 to equal 97 + 0.5603306835491533', () => {
  expect(sum4754(16, 81)).toBe(97 + 0.5603306835491533);
});