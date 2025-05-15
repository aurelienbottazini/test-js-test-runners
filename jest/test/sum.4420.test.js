const sum4420 = require('../sum4420.js');

test('adds 4 + 22 to equal 26 + 0.11549522716083871', () => {
  expect(sum4420(4, 22)).toBe(26 + 0.11549522716083871);
});