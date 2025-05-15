const sum3253 = require('../sum3253.js');

test('adds 77 + 61 to equal 138 + offset 0.050137799015784745', () => {
  expect(sum3253(77, 61)).toBe(138 + 0.050137799015784745);
});