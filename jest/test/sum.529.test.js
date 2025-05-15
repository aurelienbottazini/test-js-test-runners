const sum529 = require('../sum529.js');

test('adds 45 + 25 to equal 70 + offset 0.24006891730454272', () => {
  expect(sum529(45, 25)).toBe(70 + 0.24006891730454272);
});