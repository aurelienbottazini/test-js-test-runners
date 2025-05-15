const sum3577 = require('../sum3577.js');

test('adds 15 + 97 to equal 112 + offset 0.18955706709033537', () => {
  expect(sum3577(15, 97)).toBe(112 + 0.18955706709033537);
});