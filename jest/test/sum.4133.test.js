const sum4133 = require('../sum4133.js');

test('adds 6 + 31 to equal 37 + offset 0.7782498035679695', () => {
  expect(sum4133(6, 31)).toBe(37 + 0.7782498035679695);
});