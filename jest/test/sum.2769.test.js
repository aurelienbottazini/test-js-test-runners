const sum2769 = require('../sum2769.js');

test('adds 74 + 72 to equal 146 + offset 0.2836813096083295', () => {
  expect(sum2769(74, 72)).toBe(146 + 0.2836813096083295);
});