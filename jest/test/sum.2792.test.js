const sum2792 = require('../sum2792.js');

test('adds 36 + 41 to equal 77 + offset 0.46252909316952195', () => {
  expect(sum2792(36, 41)).toBe(77 + 0.46252909316952195);
});