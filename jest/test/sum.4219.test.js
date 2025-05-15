const sum4219 = require('../sum4219.js');

test('adds 77 + 56 to equal 133 + offset 0.9668819461873653', () => {
  expect(sum4219(77, 56)).toBe(133 + 0.9668819461873653);
});