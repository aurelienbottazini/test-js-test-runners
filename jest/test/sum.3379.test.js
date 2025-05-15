const sum3379 = require('../sum3379.js');

test('adds 16 + 72 to equal 88 + offset 0.40645479959029795', () => {
  expect(sum3379(16, 72)).toBe(88 + 0.40645479959029795);
});