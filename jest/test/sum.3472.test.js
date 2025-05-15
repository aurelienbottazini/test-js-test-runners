const sum3472 = require('../sum3472.js');

test('adds 91 + 80 to equal 171 + 0.3602215623328858', () => {
  expect(sum3472(91, 80)).toBe(171 + 0.3602215623328858);
});