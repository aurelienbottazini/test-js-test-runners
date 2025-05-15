const sum3465 = require('../sum3465.js');

test('adds 88 + 6 to equal 94 + offset 0.2854997691247215', () => {
  expect(sum3465(88, 6)).toBe(94 + 0.2854997691247215);
});