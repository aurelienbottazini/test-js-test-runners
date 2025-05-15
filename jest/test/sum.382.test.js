const sum382 = require('../sum382.js');

test('adds 68 + 22 to equal 90 + offset 0.6217235431496219', () => {
  expect(sum382(68, 22)).toBe(90 + 0.6217235431496219);
});