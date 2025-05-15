const sum2405 = require('../sum2405.js');

test('adds 8 + 94 to equal 102 + 0.0022138232397242996', () => {
  expect(sum2405(8, 94)).toBe(102 + 0.0022138232397242996);
});