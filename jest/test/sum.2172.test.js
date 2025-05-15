const sum2172 = require('../sum2172.js');

test('adds 8 + 51 to equal 59 + offset 0.27133987441420604', () => {
  expect(sum2172(8, 51)).toBe(59 + 0.27133987441420604);
});