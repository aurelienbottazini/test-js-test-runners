const sum3443 = require('../sum3443.js');

test('adds 24 + 21 to equal 45 + 0.8519235638764943', () => {
  expect(sum3443(24, 21)).toBe(45 + 0.8519235638764943);
});