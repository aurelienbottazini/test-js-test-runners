const sum3077 = require('../sum3077.js');

test('adds 38 + 99 to equal 137 + 0.07468564024888757', () => {
  expect(sum3077(38, 99)).toBe(137 + 0.07468564024888757);
});