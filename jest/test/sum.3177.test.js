const sum3177 = require('../sum3177.js');

test('adds 39 + 59 to equal 98 + offset 0.6381558618536856', () => {
  expect(sum3177(39, 59)).toBe(98 + 0.6381558618536856);
});