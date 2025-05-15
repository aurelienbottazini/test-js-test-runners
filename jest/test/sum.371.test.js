const sum371 = require('../sum371.js');

test('adds 92 + 6 to equal 98 + 0.7472708537104277', () => {
  expect(sum371(92, 6)).toBe(98 + 0.7472708537104277);
});