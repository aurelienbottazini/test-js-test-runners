const sum3193 = require('../sum3193.js');

test('adds 27 + 93 to equal 120 + 0.9924899748545084', () => {
  expect(sum3193(27, 93)).toBe(120 + 0.9924899748545084);
});