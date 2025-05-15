const sum772 = require('../sum772.js');

test('adds 40 + 23 to equal 63 + 0.2582894682231177', () => {
  expect(sum772(40, 23)).toBe(63 + 0.2582894682231177);
});