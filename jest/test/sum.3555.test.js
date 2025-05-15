const sum3555 = require('../sum3555.js');

test('adds 99 + 74 to equal 173 + 0.7348504053813053', () => {
  expect(sum3555(99, 74)).toBe(173 + 0.7348504053813053);
});