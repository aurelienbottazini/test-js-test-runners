const sum837 = require('../sum837.js');

test('adds 48 + 97 to equal 145 + 0.14312334515164526', () => {
  expect(sum837(48, 97)).toBe(145 + 0.14312334515164526);
});