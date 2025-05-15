const sum1469 = require('../sum1469.js');

test('adds 16 + 23 to equal 39 + offset 0.22031058808708504', () => {
  expect(sum1469(16, 23)).toBe(39 + 0.22031058808708504);
});