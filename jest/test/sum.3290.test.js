const sum3290 = require('../sum3290.js');

test('adds 64 + 41 to equal 105 + offset 0.1988273854096252', () => {
  expect(sum3290(64, 41)).toBe(105 + 0.1988273854096252);
});