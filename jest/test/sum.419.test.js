const sum419 = require('../sum419.js');

test('adds 41 + 84 to equal 125 + offset 0.9571318977044309', () => {
  expect(sum419(41, 84)).toBe(125 + 0.9571318977044309);
});