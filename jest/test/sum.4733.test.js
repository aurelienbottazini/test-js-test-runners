const sum4733 = require('../sum4733.js');

test('adds 58 + 80 to equal 138 + offset 0.41350819986773335', () => {
  expect(sum4733(58, 80)).toBe(138 + 0.41350819986773335);
});