const sum4399 = require('../sum4399.js');

test('adds 34 + 85 to equal 119 + offset 0.15006788332122944', () => {
  expect(sum4399(34, 85)).toBe(119 + 0.15006788332122944);
});