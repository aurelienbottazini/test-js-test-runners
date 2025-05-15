const sum4073 = require('../sum4073.js');

test('adds 53 + 22 to equal 75 + offset 0.6031551564978074', () => {
  expect(sum4073(53, 22)).toBe(75 + 0.6031551564978074);
});