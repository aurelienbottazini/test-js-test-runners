const sum1951 = require('../sum1951.js');

test('adds 70 + 79 to equal 149 + offset 0.9169979791477262', () => {
  expect(sum1951(70, 79)).toBe(149 + 0.9169979791477262);
});