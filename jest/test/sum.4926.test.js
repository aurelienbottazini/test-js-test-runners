const sum4926 = require('../sum4926.js');

test('adds 75 + 74 to equal 149 + offset 0.32011964151627015', () => {
  expect(sum4926(75, 74)).toBe(149 + 0.32011964151627015);
});