const sum3763 = require('../sum3763.js');

test('adds 3 + 94 to equal 97 + 0.09292208277596958', () => {
  expect(sum3763(3, 94)).toBe(97 + 0.09292208277596958);
});