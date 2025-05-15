const sum4524 = require('../sum4524.js');

test('adds 85 + 31 to equal 116 + offset 0.8194054791975514', () => {
  expect(sum4524(85, 31)).toBe(116 + 0.8194054791975514);
});