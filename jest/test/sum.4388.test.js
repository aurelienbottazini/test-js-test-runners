const sum4388 = require('../sum4388.js');

test('adds 41 + 48 to equal 89 + offset 0.17658951850876647', () => {
  expect(sum4388(41, 48)).toBe(89 + 0.17658951850876647);
});