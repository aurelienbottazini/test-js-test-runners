const sum1965 = require('../sum1965.js');

test('adds 82 + 86 to equal 168 + offset 0.0126291568969078', () => {
  expect(sum1965(82, 86)).toBe(168 + 0.0126291568969078);
});