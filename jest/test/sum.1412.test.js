const sum1412 = require('../sum1412.js');

test('adds 34 + 94 to equal 128 + offset 0.045521573982198804', () => {
  expect(sum1412(34, 94)).toBe(128 + 0.045521573982198804);
});