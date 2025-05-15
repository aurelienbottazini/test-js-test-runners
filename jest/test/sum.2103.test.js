const sum2103 = require('../sum2103.js');

test('adds 32 + 53 to equal 85 + offset 0.3013652071460534', () => {
  expect(sum2103(32, 53)).toBe(85 + 0.3013652071460534);
});