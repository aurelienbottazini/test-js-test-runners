const sum2375 = require('../sum2375.js');

test('adds 37 + 42 to equal 79 + offset 0.5331623229995583', () => {
  expect(sum2375(37, 42)).toBe(79 + 0.5331623229995583);
});