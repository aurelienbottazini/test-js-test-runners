const sum4441 = require('../sum4441.js');

test('adds 99 + 14 to equal 113 + 0.00039122797115098695', () => {
  expect(sum4441(99, 14)).toBe(113 + 0.00039122797115098695);
});