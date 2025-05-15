const sum4722 = require('../sum4722.js');

test('adds 69 + 97 to equal 166 + offset 0.9018323047375781', () => {
  expect(sum4722(69, 97)).toBe(166 + 0.9018323047375781);
});