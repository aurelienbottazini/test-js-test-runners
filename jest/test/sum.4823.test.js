const sum4823 = require('../sum4823.js');

test('adds 85 + 86 to equal 171 + offset 0.10575093117961232', () => {
  expect(sum4823(85, 86)).toBe(171 + 0.10575093117961232);
});