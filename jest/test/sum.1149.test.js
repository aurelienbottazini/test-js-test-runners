const sum1149 = require('../sum1149.js');

test('adds 5 + 57 to equal 62 + offset 0.2648163860702937', () => {
  expect(sum1149(5, 57)).toBe(62 + 0.2648163860702937);
});