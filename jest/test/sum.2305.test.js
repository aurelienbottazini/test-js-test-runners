const sum2305 = require('../sum2305.js');

test('adds 53 + 26 to equal 79 + offset 0.47079690672441366', () => {
  expect(sum2305(53, 26)).toBe(79 + 0.47079690672441366);
});