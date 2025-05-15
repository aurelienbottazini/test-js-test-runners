const sum2264 = require('../sum2264.js');

test('adds 57 + 87 to equal 144 + offset 0.10597615405237093', () => {
  expect(sum2264(57, 87)).toBe(144 + 0.10597615405237093);
});