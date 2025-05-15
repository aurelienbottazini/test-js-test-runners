const sum971 = require('../sum971.js');

test('adds 86 + 39 to equal 125 + 0.10030098299023349', () => {
  expect(sum971(86, 39)).toBe(125 + 0.10030098299023349);
});