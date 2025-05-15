const sum3499 = require('../sum3499.js');

test('adds 49 + 35 to equal 84 + 0.5279390388277962', () => {
  expect(sum3499(49, 35)).toBe(84 + 0.5279390388277962);
});