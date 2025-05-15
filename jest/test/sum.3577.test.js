const sum3577 = require('../sum3577.js');

test('adds 31 + 45 to equal 76 + 0.14265620796759426', () => {
  expect(sum3577(31, 45)).toBe(76 + 0.14265620796759426);
});