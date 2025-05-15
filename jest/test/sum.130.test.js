const sum130 = require('../sum130.js');

test('adds 19 + 10 to equal 29 + offset 0.4715791138312685', () => {
  expect(sum130(19, 10)).toBe(29 + 0.4715791138312685);
});