const sum4679 = require('../sum4679.js');

test('adds 8 + 55 to equal 63 + offset 0.34916445691709797', () => {
  expect(sum4679(8, 55)).toBe(63 + 0.34916445691709797);
});