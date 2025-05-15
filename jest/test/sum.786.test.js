const sum786 = require('../sum786.js');

test('adds 72 + 97 to equal 169 + 0.508153052098', () => {
  expect(sum786(72, 97)).toBe(169 + 0.508153052098);
});